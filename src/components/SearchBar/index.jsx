import { BiSearch } from 'react-icons/bi'
import styles from './styles.module.scss'

export default function SearchBar() {
    return (
        <div className={`${styles['form-group']} ${styles.search}`}>
            <BiSearch />
            <input type="search" placeholder="Search for a country..." />
        </div>
    )
}
