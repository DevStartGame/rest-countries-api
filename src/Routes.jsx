import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalLayout from "./layouts/GlobalLayout";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import ErrorPage from "./pages/ErrorPage";

async function loader({ params }) {
    const id = params.id;
    let url = "https://restcountries.com/v3.1/";

    // Caso tenha parâmetro, url = "https://restcountries.com/v3.1/alpha/(params)"
    // Caso não haja parâmetro, visualiza todos os países, url = "https://restcountries.com/v3.1/all"
    url = id ? url + "alpha/" + id : url + "all";

    const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => console.error("Error: ", err));

    return data;
}

// Estruturas das rotas
const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Countries />,
                path: "",
                loader: loader,
            },
            {
                element: <Country />,
                path: "countries/:id",
                loader: loader,
            },
        ],
    },
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
