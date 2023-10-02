import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import PageTitleUtils from '@/utils/PageTitleUtils'

export default function ErrorPage() {
    PageTitleUtils('Página de Erro')

    return (
        <div className={styles.error_page}>
            <h1 className={styles.error_text}>404 | Not Found</h1>
            <Link to="/" className={styles.error_button}>
                Back to Home
            </Link>
        </div>
    )
}
