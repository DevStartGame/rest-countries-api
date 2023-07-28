import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import { ArrowLeft } from '../../components/Icons'

export default function Details() {
        const [country, setCountry] = useState([]);
        const [loading, setLoading] = useState(true);
        const { name } = useParams();
        const navigate = useNavigate();

        const goBack = () => {
            navigate(-1)
        }

        useEffect(() => {
            const getCountry = async () => {
                const response = await fetch(
                    `https://restcountries.com/v3.1/name/${name}`
                );
                const data = await response.json();
                setCountry(data);
                setLoading(false);
            }
            getCountry();
        }, [name])


    return (
        <div className={`container ${styles.details}`}>
                <button onClick={goBack} className={styles['btn-back']}>
                <ArrowLeft />
                    Back
                </button>
                <div className={styles['country-details']}>
                { !loading && (
                <>
                    <img src={country[0].flags.svg} alt="country flag" />
                    <div className={styles['info-wrapper']}>
                        <h1 className={styles.title}>{country[0].name.official}</h1>
                        <div className={styles.info}>
                            <div className={styles['info-left']}>
                                <dl >
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
                                    <dd>{Object.values(country[0].currencies).map(item => item.name)}</dd>
                                    <dt>Languages:</dt>
                                    <dd>{Object.values(country[0].languages).map(item => item).join(' - ')}</dd>
                                </dl>
                            </div>
                        </div>
                        <div className={styles.border}>
                        <span>Border Countries:</span>
                        <ul>
                            {country[0].borders ? (
                                country[0].borders.map(item => (
                                    <li className={styles['border-item']} key={item}>{item}</li>
                                ))
                            ) : (
                                <li className={styles['border-item']}>No Borders</li>
                            )}
                        </ul>
                    </div>
                    </div>
                </>
               ) }
        </div>
    </div>
    )
}
