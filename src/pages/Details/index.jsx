import styles from './styles.module.scss'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from '@/components/Icons'
import Loading from '@/components/Loading'
// import { getCountry } from '@/services/api'

export default function Details() {
    const [country, setCountry] = useState(null)
    const { slug } = useParams()
    const name = slug.replace(/-/g, ' ')
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        getCountry(setCountry, name)
    }, [name])

    return (
        <div className={`container ${styles.details}`}>
            <button onClick={handleGoBack} className={styles['btn-back']}>
                <ArrowLeft />
                Back
            </button>

            {!country && <Loading />}
            {country && (
                <main className={styles['country-details']}>
                    <div className={styles['img-wrapper']}>
                        <img src={country[0].flags.svg} alt="country flag" />
                    </div>

                    <div className={styles['info-wrapper']}>
                        <h1 className={styles.title}>{country[0].name.official}</h1>
                        <div className={styles.info}>
                            <div className={styles['info-left']}>
                                <dl>
                                    <dt>Native name:</dt>
                                    <dd>{country[0].name.official}</dd>
                                    <dt>Population:</dt>
                                    <dd>{country[0].population}</dd>
                                    <dt>Region:</dt>
                                    <dd>{country[0].region}</dd>
                                    <dt>Sub region:</dt>
                                    <dd>{country[0].subregion}</dd>
                                    <dt>Capital:</dt>
                                    <dd>{country[0].capital[0]}</dd>
                                </dl>
                            </div>

                            <div className={styles['info-left']}>
                                <dl>
                                    <dt>Top Level Domain:</dt>
                                    <dd>{country[0].tld[0]}</dd>
                                    <dt>Currencies:</dt>
                                    <dd>
                                        {Object.values(country[0].currencies).map(
                                            item => item.name
                                        )}
                                    </dd>
                                    <dt>Languages:</dt>
                                    <dd>
                                        {Object.values(country[0].languages)
                                            .map(item => item)
                                            .join(' - ')}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className={styles.border}>
                            <span>Border Countries:</span>
                            <ul>
                                {country[0].borders ? (
                                    country[0].borders.map(item => (
                                        <li className={styles['border-item']} key={item}>
                                            {item}
                                        </li>
                                    ))
                                ) : (
                                    <li className={styles['border-item']}>No Borders</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </main>
            )}
        </div>
    )
}
