import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

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
