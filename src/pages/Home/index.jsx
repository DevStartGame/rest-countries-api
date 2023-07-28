import styles from './styles.module.scss'
import { useState, useEffect } from 'react'

// components
import { SearchBar } from '../../components/SearchBar'
import { Filter } from '../../components/Filter'
import { CountryCard } from '../../components/CountryCard'
import { getCountries } from '../../services/api'

export default function Home() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries(setCountries)
    }, [])

    return (
        <div className={`container`}>
            <div className={styles.row}>
                <SearchBar />
                <Filter />
            </div>

            <div className={styles['countries-grid']}>
                {countries &&
                    countries.map(
                        ({
                            name: { common: name },
                            flags: { svg: flag },
                            // capital: [capital],
                            region,
                            population
                        }) => {
                            const props = { flag, name, /*  capital, */ region, population }
                            return <CountryCard {...props} key={name} />
                        }
                    )}
            </div>
        </div>
    )
}
