import styles from './styles.module.scss'
import { useParams, useNavigate, Navigate } from 'react-router-dom'

// #Componentes
import { ArrowLeft } from '@/components/Icons'
import Loading from '@/components/Loading'
import useGetApiData from '@/hooks/useGetApiData'

export default function Details() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const name = slug.replace(/-/g, ' ')
    const URL = `https://restcountries.com/v3.1/name/${name}`
    const { data, error, isLoading } = useGetApiData(URL)

    const handleGoBack = () => {
        navigate(-1)
    }

    console.log(data)

    return (
        <div className={`container ${styles.details}`}>
            <button onClick={handleGoBack} className={styles['btn-back']}>
                <ArrowLeft />
                Back
            </button>

            {error && <Navigate to="/error" />}
            {isLoading && <Loading />}
            {data && (
                <main className={styles['country-details']}>
                    <div className={styles['img-wrapper']}>
                        <img src={data[0].flags.svg} alt="country flag" />
                    </div>

                    <div className={styles['info-wrapper']}>
                        <h1 className={styles.title}>{data[0].name.official}</h1>
                        <div className={styles.info}>
                            <div className={styles['info-left']}>
                                <dl>
                                    <dt>Native name:</dt>
                                    <dd>{data[0].name.official}</dd>
                                    <dt>Population:</dt>
                                    <dd>{data[0].population}</dd>
                                    <dt>Region:</dt>
                                    <dd>{data[0].region}</dd>
                                    <dt>Sub region:</dt>
                                    <dd>{data[0].subregion}</dd>
                                    <dt>Capital:</dt>
                                    <dd>{data[0].capital[0]}</dd>
                                </dl>
                            </div>

                            <div className={styles['info-left']}>
                                <dl>
                                    <dt>Top Level Domain:</dt>
                                    <dd>{data[0].tld[0]}</dd>
                                    <dt>Currencies:</dt>
                                    <dd>
                                        {Object.values(data[0].currencies).map(item => item.name)}
                                    </dd>
                                    <dt>Languages:</dt>
                                    <dd>
                                        {Object.values(data[0].languages)
                                            .map(item => item)
                                            .join(' - ')}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className={styles.border}>
                            <span>Border Countries:</span>
                            <ul>
                                {data[0].borders ? (
                                    data[0].borders.map(item => (
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
