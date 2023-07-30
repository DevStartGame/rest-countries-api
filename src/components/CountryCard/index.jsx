import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

const Info = ({ label, value }) => (
    <p>
        <b>{label}:</b> {value}
    </p>
)

export default function CountryCard({ name, flag, region, population, capital }) {
    const slug = name.replace(/\s/g, '-')

    return (
        <div className={styles['country-card']}>
            <Link to={`/country-details/${slug}`}>
                <figure style={{ '--bgFlag': `url("${flag}")` }}></figure>
                <div className={styles['card-body']}>
                    <h3>{name}</h3>
                    <Info label="Population" value={population} />
                    <Info label="Region" value={region} />
                    <Info label="Capital" value={capital} />
                </div>
            </Link>
        </div>
    )
}
