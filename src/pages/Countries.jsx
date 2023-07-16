import { Link, useLoaderData } from "react-router-dom";

export default function Countries() {
    // objeto com todos os países para ser usado abaixo
    const countries = useLoaderData();

    return (
        <>
            {/* TODO: apagar código, foi criado somente pra testes */}
            <h1>todos os países aqui</h1>

            <ul>
                {countries.map((country) => (
                    <li key={country.ccn3}>
                        <Link to={`/countries/${country.ccn3}`}>
                            {country.ccn3} - {country.name.common}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* ---- */}
        </>
    );
}
