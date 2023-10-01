import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

function Root({ children }) {
    return <main className={styles.container}>{children}</main>
}

function Card({ slug, children }) {
    return (
        <section className={styles.card}>
            <Link to={`/country-details/${slug}`}>{children}</Link>
        </section>
    )
}

function Img({ flag = '', alt = '' }) {
    return <img className={styles.card__image} src={flag} alt={alt} />
}

function Body({ children }) {
    return <div className={styles.card__body}>{children}</div>
}

function Title({ name }) {
    return <h3 className={styles.card__title}>{name}</h3>
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
