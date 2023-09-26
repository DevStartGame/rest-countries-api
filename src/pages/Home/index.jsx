import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import useGetApiData from '@/hooks/useGetApiData'

// components
import SearchBar from '@/components/SearchBar'
import Filter from '@/components/Filter'
import Loading from '@/components/Loading'
import CountryCard from '@/components/CountryCard'
import { Navigate } from 'react-router-dom'

export default function Home() {
    const URL = 'https://restcountries.com/v3.1/all'
    const { data, error, isLoading } = useGetApiData(URL)
    const [filterByRegion, setFilterByRegion] = useState('')
    const [countries, setCountries] = useState([])
    // const [filterByName, setFilterByName] = useState('')

    useEffect(() => {
        function filter() {
            if (filterByRegion === '') {
                return setCountries(data)
            }

            setCountries(data.filter(country => country.region === filterByRegion))
        }
        filter()
    }, [filterByRegion, data])

    return (
        <div className={`container`}>
            <div className={styles.row}>
                <SearchBar />
                <Filter onSelectRegion={region => setFilterByRegion(region)} />
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
