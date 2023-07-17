import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GlobalLayout />}>
                    <Route index element={<Countries />} />
                    <Route path="Countries/:id" element={<Country />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
