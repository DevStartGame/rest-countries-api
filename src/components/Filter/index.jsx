import styles from './styles.module.scss'
import { useRef } from 'react'
import { LuChevronUp } from 'react-icons/lu'

const Regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default function Filter({ filter, onSelectRegion }) {
    const dropdownRef = useRef(null)

    const handleDropdown = () => {
        dropdownRef.current.classList.toggle(styles.open)
    }

    // eslint-disable-next-line no-unused-vars
    const handleFilterByRegion = region => {
        onSelectRegion(region)
        handleDropdown()
    }

    return (
        <div className={`${styles['form-group']} ${styles.dropdown}`} ref={dropdownRef}>
            <div onClick={handleDropdown}>
                Filter by Region <LuChevronUp />
            </div>
            <div className={styles['dropdown-wrapper']}>
                <a onClick={() => handleFilterByRegion('')}>All Regions</a>
                {Regions.map(region => (
                    <a
                        className={region === filter ? styles['is-selected'] : ''}
                        key={region}
                        onClick={() => handleFilterByRegion(region)}>
                        {region}
                    </a>
                ))}
            </div>
        </div>
    )
}
