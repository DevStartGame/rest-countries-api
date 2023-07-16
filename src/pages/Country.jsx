import { Link, useLoaderData } from "react-router-dom";

export default function Country() {
    // objeto com todos os países para ser usado abaixo
    const country = useLoaderData();

    return (
        <>
            {/* TODO: apagar código, foi criado somente pra testes */}
            <h1>todos os países aqui</h1>

            {country.map((country) => (
                <p key={country.name.common}>{country.name.common}</p>
            ))}

            <Link to="/">voltar</Link>
            {/* ---- */}
        </>
    );
}
