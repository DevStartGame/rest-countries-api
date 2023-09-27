import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import useGetApiData from '@/hooks/useGetApiData'
import PageTitleUtils from '@/utils/PageTitleUtils'

// components
import SearchBar from '@/components/SearchBar'
import Filter from '@/components/Filter'
import Loading from '@/components/Loading'
import CountryCard from '@/components/CountryCard'

export default function Home() {
    const URL = 'https://restcountries.com/v3.1/all'
    const { data, error, isLoading } = useGetApiData(URL)
    const [filterByRegion, setFilterByRegion] = useState('')
    const [filterByText, setFilterByText] = useState('')
    const [countries, setCountries] = useState([])

    PageTitleUtils('Página Inicial')

    function handleSearch(e) {
        setFilterByRegion('')
        setFilterByText(e.target.value)
    }

    useEffect(() => {
        function filter() {
            let filtered

            if (filterByRegion === '' && filterByText === '') {
                return setCountries(data)
            }

            if (filterByRegion) {
                setFilterByText('')
                filtered = data.filter(country => country.region === filterByRegion)
            }

            if (filterByText) {
                filtered = data.filter(country =>
                    country.name.common.toLowerCase().startsWith(filterByText.toLowerCase())
                )
            }

            return setCountries(filtered)
        }
        filter()
    }, [filterByRegion, filterByText, data])

    return (
        <div className={`container`}>
            <div className={styles.row}>
                <SearchBar searchText={filterByText} onSearch={handleSearch} />
                <Filter
                    filter={filterByRegion}
                    onSelectRegion={region => setFilterByRegion(region)}
                />
            </div>

            {error && <Navigate to="/error" />}
            {isLoading && <Loading />}

            {countries && (
                <CountryCard.Root>
                    {countries.map(country => (
                        <CountryCard.Card key={country.ccn3} slug={country.ccn3}>
                            <CountryCard.Img flag={country.flags.svg} alt={country.flags.alt} />
                            <CountryCard.Body>
                                <CountryCard.Title name={country.name.common} />
                                <CountryCard.Info label="Population" value={country.population} />
                                <CountryCard.Info label="Region" value={country.region} />
                                <CountryCard.Info label="Capital" value={country.capital} />
                            </CountryCard.Body>
                        </CountryCard.Card>
                    ))}
                </CountryCard.Root>
            )}
        </div>
    )
}
