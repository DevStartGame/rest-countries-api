import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/nav-bar'

export default function GlobalLayout() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Outlet />
        </>
    )
}
