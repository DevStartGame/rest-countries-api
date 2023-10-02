import styles from './styles.module.scss'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import useGetApiData from '@/hooks/useGetApiData'
import PageTitleUtils from '@/utils/PageTitleUtils'
import filterCountries from '@/utils/filterCountries'

// #componentes
import CountryCard from '@/components/CountryCard'
import Filter from '@/components/Filter'
import Loading from '@/components/Loading'
import SearchBar from '@/components/SearchBar'

export default function Home() {
    const URL = 'https://restcountries.com/v3.1/all'
    const initialDisplayCount = 16

    PageTitleUtils('Página Inicial')

    // #hooks
    const { data, error, isLoading } = useGetApiData(URL)

    // #useState
    const [countries, setCountries] = useState([])
    const [displayCount, setDisplayCount] = useState(initialDisplayCount)
    const [filterByRegion, setFilterByRegion] = useState('')
    const [filterByText, setFilterByText] = useState('')

    // #useEffect
    useEffect(() => {
        if (!data) return

        setCountries(filterCountries(data, filterByRegion, filterByText, displayCount))
    }, [data, filterByRegion, filterByText, displayCount])

    // #handle
    function handleSearch(e) {
        setFilterByText(e.target.value)
        setDisplayCount(initialDisplayCount)
    }

    function handleMoreItems() {
        setDisplayCount(prevCount => prevCount + initialDisplayCount)
    }

    return (
        <>
            <div className={`container`}>
                <div className={styles.row}>
                    <SearchBar searchText={filterByText} onSearch={handleSearch} />
                    <Filter
                        filter={filterByRegion}
                        onSelectRegion={region => setFilterByRegion(region)}
                    />
                </div>

                {error && <Navigate to="/error" />}
                {(countries.length === 0 || isLoading) && <Loading />}
                {countries.length === 0 && filterByText && (
                    <div className={styles.no_country}>No Country Found...</div>
                )}

                {countries && (
                    <CountryCard.Root>
                        {countries.map(country => (
                            <CountryCard.Card key={country.cca3} slug={country.cca3}>
                                <CountryCard.Img
                                    flag={country.flags.svg}
                                    alt={country.flags.alt || country.name.common}
                                />
                                <CountryCard.Body>
                                    <CountryCard.Title name={country.name.common} />
                                    <CountryCard.Info
                                        label="Population"
                                        value={
                                            country?.population?.toLocaleString() || 'No Population'
                                        }
                                    />
                                    <CountryCard.Info label="Region" value={country.region} />
                                    <CountryCard.Info
                                        label="Capital"
                                        value={country?.capital?.join(', ') || 'No Capital'}
                                    />
                                </CountryCard.Body>
                            </CountryCard.Card>
                        ))}
                    </CountryCard.Root>
                )}
            </div>

            <div className={styles.load_more}>
                {countries.length >= displayCount && (
                    <button className={styles.btn} onClick={handleMoreItems}>
                        More Countries
                    </button>
                )}
            </div>
        </>
    )
}
