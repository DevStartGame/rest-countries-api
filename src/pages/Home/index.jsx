import styles from './styles.module.scss'
import { useState } from 'react'

// components
import SearchBar from '@/components/SearchBar'
import Filter from '@/components/Filter'
import CountryCard from '@/components/CountryCard'
import useGetApiData from '@/hooks/useGetApiData'
//
export default function Home() {
    const [filterByRegion, setFilterByRegion] = useState('')
    const { data, error, isLoading } = useGetApiData()

    return (
        <div className={`container`}>
            <div className={styles.row}>
                <SearchBar />
                <Filter onSelectRegion={region => setFilterByRegion(region)} />
            </div>
            {data &&
                data.map(country => <div key={country.name.common}>{country.name.common}</div>)}
            {/* <div className={styles['countries-grid']}>
                {filterByRegion === ''
                    ? data.map(
                          ({
                              name: { common: name },
                              flags: { svg: flag },
                              capital: capital,
                              region,
                              population
                          }) => {
                              const props = { flag, name, capital, region, population }
                              return <CountryCard {...props} key={name} />
                          }
                      )
                    : data
                          .filter(country => country.region === filterByRegion)
                          .map(
                              ({
                                  name: { common: name },
                                  flags: { svg: flag },
                                  capital,
                                  region,
                                  population
                              }) => {
                                  const props = { flag, name, capital, region, population }
                                  return <CountryCard {...props} key={name} />
                              }
                          )}
            </div> */}
        </div>
    )
}
