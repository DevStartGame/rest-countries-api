import { useEffect } from 'react';
import './style.scss';
import { useState } from 'react';

const CountryCard = ({ name, flag }) => {
    return (
        <div className="country-card">
            <figure style={{ '--bgFlag': `url("${flag}")` }}></figure>
            <div className="card-body">
                <h3>{name}</h3>
                <p>
                    <b>Population:</b> 20.456.576
                </p>
                <p>
                    <b>Region:</b> Africa
                </p>
                <p>
                    <b>Capital:</b> Pretoria
                </p>
            </div>
        </div>
    );
};
export const Home = () => {
    const [countries, setCountries] = useState([]);
    const fetchCountries = async () => {
        const response = await fetch(
            'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags'
        ).then((response) => response.json());
        setCountries(response);
    };
    useEffect(() => {
        fetchCountries();
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div></div>
                <div></div>
            </div>
            <div className="countries-grid">
                {countries?.length &&
                    countries.map(({ name: { common }, flags: { svg } }) => (
                        <CountryCard flag={svg} name={common} key={common} />
                    ))}
            </div>
        </div>
    );
};
