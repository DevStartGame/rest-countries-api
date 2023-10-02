import styles from './styles.module.scss'
import ReactLoading from 'react-loading'

export default function Loading() {
    return (
        <div className={styles.loading}>
            <ReactLoading type={'spinningBubbles'} color={'#ffffff'} />
        </div>
    )
}
