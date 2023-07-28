import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
const Body = document.querySelector('body')

export default function GlobalLayout() {
    Body.removeAttribute('data-dark-theme')
    if (window.matchMedia('(prefers-color-scheme: dark)')) {
        Body.setAttribute('data-dark-theme', '')
    }
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Outlet />
        </>
    )
}
