import styles from "./style.module.scss";
import { FillMoon, Moon } from "../Icons";
import { useState } from "react";

export function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);

        // A lógica de alteração de tema pode vir aqui
        // Por exemplo, você pode adicionar/remover uma classe CSS para alterar o tema
    };

    return (
        <div className={styles.navBar}>
            <nav className={`container ${styles.content}`}>
                <a href="/">
                    {/* <a> será substituido por <Link> do react-router para evitar reload ao clicar no link */}
                    <h1 className={styles.title}>Where in the world?</h1>
                </a>
                <button onClick={toggleTheme} className={styles.toggleThemeButton} type="button">
                    {isDarkMode ? <Moon /> : <FillMoon />}
                    Dark mode
                </button>
            </nav>
        </div>
    );
}
