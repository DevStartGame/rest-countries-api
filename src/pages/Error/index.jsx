import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className={styles.errorPage}>
            <h1 className={styles.errorPage__text}>404 | Not Found</h1>
            <Link to="/" className={styles.errorPage__button}>
                Back to Home
            </Link>
        </div>
    )
}
