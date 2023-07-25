import styles from './styles.module.scss'
import { useRef } from 'react'
import { LuChevronUp } from 'react-icons/lu'

const Regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

export function Filter() {
    const dropdownRef = useRef(null)

    const handleDropdown = () => {
        dropdownRef.current.classList.toggle(styles.open)
    }

    // eslint-disable-next-line no-unused-vars
    const handleFilterByRegion = region => {
        // fetchCountries({ region })
        handleDropdown()
    }

    return (
        <div className={`${styles['form-group']} ${styles.dropdown}`} ref={dropdownRef}>
            <div onClick={handleDropdown}>
                Filter by Region <LuChevronUp />
            </div>
            <div className={styles['dropdown-wrapper']}>
                <a onClick={() => handleFilterByRegion(null)}>All Regions</a>
                {Regions.map(region => (
                    <a key={region} onClick={() => handleFilterByRegion(region)}>
                        {region}
                    </a>
                ))}
            </div>
        </div>
    )
}
