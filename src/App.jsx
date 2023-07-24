import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalLayout from './layouts/GlobalLayout'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import { Home } from './pages/Home/'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GlobalLayout />}>
                    <Route index element={<Home />} />
                    <Route path="countries/:id" element={<Country />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
