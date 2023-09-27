import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import PageTitleUtils from '@/utils/PageTitleUtils'

export default function ErrorPage() {
    PageTitleUtils('Página de Erro')

    return (
        <div className={styles.errorPage}>
            <h1 className={styles.errorPage__text}>404 | Not Found</h1>
            <Link to="/" className={styles.errorPage__button}>
                Back to Home
            </Link>
        </div>
    )
}
