import { BiSearch } from 'react-icons/bi'
import styles from './styles.module.scss'

export function SearchBar() {
    // eslint-disable-next-line no-unused-vars
    const handleSearch = async ({ target }) => {
        // fetchCountries({ name: target?.value })
    }

    return (
        <div className={`${styles['form-group']} ${styles.search}`}>
            <BiSearch />
            <input type="search" placeholder="Search for a country..." onInput={handleSearch} />
        </div>
    )
}
