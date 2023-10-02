import styles from './styles.module.scss'
import { useParams, useNavigate, Navigate, Link } from 'react-router-dom'
import PageTitleUtils from '@/utils/PageTitleUtils'
import useGetApiData from '@/hooks/useGetApiData'

// #Componentes
import { ArrowLeft } from '@/components/Icons'
import Loading from '@/components/Loading'

export default function Details() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const URL = `https://restcountries.com/v3.1/alpha/${slug}`
    const { data, error, isLoading } = useGetApiData(URL)
    const country = data && data[0]

    PageTitleUtils('Página de Detalhes')

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className={`container ${styles.details}`}>
            <button className={styles.btn_back} onClick={handleGoBack}>
                <ArrowLeft />
                Back
            </button>

            {error && <Navigate to="/error" />}
            {(!country || isLoading) && <Loading />}

            {country && (
                <main className={styles.country_details}>
                    <div className={styles.img_wrapper}>
                        <img
                            className={styles.img}
                            src={country.flags.svg}
                            alt={country.flags.alt || country.name.official}
                        />
                    </div>

                    <div className={styles.info_wrapper}>
                        <h1 className={styles.title}>
                            {country.name.official} ({country.cca2})
                        </h1>

                        <div className={styles.info}>
                            <div>
                                <dl>
                                    <dt>Native Name:</dt>
                                    <dd>{Object.values(country.name.nativeName)[0].common}</dd>

                                    <dt>Population:</dt>
                                    <dd>{country.population.toLocaleString()}</dd>

                                    <dt>Region:</dt>
                                    <dd>{country.region}</dd>

                                    <dt>Sub region:</dt>
                                    <dd>{country.subregion}</dd>

                                    <dt>Capital:</dt>
                                    <dd>{country?.capital?.join(', ') || 'No Capital'}</dd>
                                </dl>
                            </div>

                            <div>
                                <dl>
                                    <dt>Top Level Domain:</dt>
                                    <dd>{country?.tld?.join(' - ')}</dd>

                                    <dt>Currencies:</dt>
                                    <dd>
                                        {Object.values(country.currencies).map(item => item.name)}
                                    </dd>

                                    <dt>Languages:</dt>
                                    <dd>{Object.values(country.languages).join(', ')}</dd>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <span>Border Countries:</span>
                            <ul className={styles.border_items}>
                                {country.borders ? (
                                    country.borders.map(item => (
                                        <li className={styles.border_item} key={item}>
                                            <Link to={`/country-details/${item}`}>{item}</Link>
                                        </li>
                                    ))
                                ) : (
                                    <li className={styles.border_item}>No Borders</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </main>
            )}
        </div>
    )
}
