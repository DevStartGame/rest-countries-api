import { useEffect } from 'react'
import styles from './styles.module.scss'
import { useState } from 'react'
import { CountryCard } from '../../components/CountryCard'
import { SearchBar } from '../../components/SearchBar'
import { Filter } from '../../components/Filter'

const URL = 'https://restcountries.com/v3.1/'

export default function Home() {
    const [countries, setCountries] = useState([])
    const fetchCountries = async ({ name = null, region = null }) => {
        let filterBy = name ? `name/${name}` : 'all'
        filterBy = region ? `region/${region}` : filterBy
        const response = await fetch(
            `${URL}${filterBy}?fields=name,capital,population,region,flags`
        ).then(response => response.json())
        setCountries(response)
    }

    useEffect(() => {
        fetchCountries({})
    }, [])

    return (
        <div className={`container`}>
            <div className={styles.row}>
                <SearchBar />
                <Filter />
            </div>
            <div className={styles['countries-grid']}>
                {countries?.length &&
                    countries.map(
                        ({
                            name: { common: name },
                            flags: { svg: flag },
                            capital: [capital],
                            region,
                            population
                        }) => {
                            const props = { flag, name, capital, region, population }
                            return <CountryCard {...props} key={name} />
                        }
                    )}
            </div>
        </div>
    )
}
