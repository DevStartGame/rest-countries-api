import styles from './style.module.scss'
import { FillMoon, Moon } from '../Icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Body = document.querySelector('body')

export default function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(Body.hasAttribute('data-dark-theme'))

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        Body.toggleAttribute('data-dark-theme')
    }

    return (
        <div className={styles.navBar}>
            <nav className={`container ${styles.content}`}>
                <Link to="/">
                    <h1 className={styles.title}>Where in the world?</h1>
                </Link>
                <button onClick={toggleTheme} className={styles.toggleThemeButton} type="button">
                    {isDarkMode ? <Moon /> : <FillMoon />}
                    {isDarkMode ? 'Dark' : 'Light'} mode
                </button>
            </nav>
        </div>
    )
}
