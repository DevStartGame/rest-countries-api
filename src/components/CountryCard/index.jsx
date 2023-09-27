import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

function Root({ children }) {
    return <main className={styles['countries-grid']}>{children}</main>
}

function Card({ slug, children }) {
    return (
        <section className={styles['country-card']}>
            <Link to={`/country-details/${slug}`}>{children}</Link>
        </section>
    )
}

function Img({ flag = '', alt = '' }) {
    return <figure style={{ '--bgFlag': `url("${flag}")` }} alt={alt}></figure>
}

function Body({ children }) {
    return <div className={styles['card-body']}>{children}</div>
}

function Title({ name }) {
    return <h3>{name}</h3>
}

function Info({ label, value }) {
    return (
        <p>
            <span>{label}:</span> {value}
        </p>
    )
}

export default {
    Root,
    Card,
    Img,
    Body,
    Title,
    Info
}
