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
    return <img className={styles.image} src={flag} alt={alt} />
}

function Body({ children }) {
    return <div className={styles.body}>{children}</div>
}

function Title({ name = '' }) {
    return <h3 className={styles.title}>{name}</h3>
}

function Info({ label = '', value = '' }) {
    return (
        <p className={styles.info}>
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
