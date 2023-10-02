import { BiSearch } from 'react-icons/bi'
import { useId } from 'react'
import styles from './styles.module.scss'

export default function SearchBar({ searchText, onSearch }) {
    const SearchBar = useId()

    return (
        <div className={`${styles['form-group']} ${styles.search}`}>
            <BiSearch />
            <input
                id={SearchBar}
                type="search"
                placeholder="Search for a country..."
                value={searchText}
                onChange={onSearch}
            />
        </div>
    )
}
