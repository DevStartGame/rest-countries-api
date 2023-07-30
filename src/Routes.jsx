import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalLayout from '@layouts/GlobalLayout'
import Home from '@pages/Home'
import Details from '@pages/Details'
import Error from '@pages/Error'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GlobalLayout />}>
                    <Route index element={<Home />} />
                    <Route path="country-details/:name" element={<Details />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}
