import { useEffect, useRef } from 'react';
import './style.scss';
import { useState } from 'react';
import { CountryCard } from './CountryCard';
import { Icon } from '../../components';

const URL = 'https://restcountries.com/v3.1/';

const Regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

export const Home = () => {
    const [countries, setCountries] = useState([]);
    const dropdownRef = useRef(null);
    const fetchCountries = async ({ name = null, region = null }) => {
        let filterBy = name ? `name/${name}` : 'all';
        filterBy = region ? `region/${region}` : filterBy;
        const response = await fetch(`${URL}${filterBy}?fields=name,capital,population,region,flags`).then((response) =>
            response.json()
        );
        setCountries(response);
    };

    useEffect(() => {
        fetchCountries({});
    }, []);

    const handleSearch = async ({ target }) => {
        fetchCountries({ name: target?.value });
    };

    const handleFilterByRegion = (region) => {
        fetchCountries({ region });
        handleDropdown();
    };

    const handleDropdown = () => {
        dropdownRef.current.classList.toggle('open');
    };
    return (
        <div className="container">
            <div className="row">
                <div className="form-group search">
                    <Icon icon="search" className="secondary" />
                    <input type="search" placeholder="Search for a country..." onInput={handleSearch} />
                </div>
                <div className="form-group dropdown" ref={dropdownRef}>
                    <div onClick={handleDropdown}>
                        Filter by Region <Icon icon="chevron" />
                    </div>
                    <div className="dropdown-wrapper">
                        <a onClick={() => handleFilterByRegion(null)}>All Regions</a>
                        {Regions.map((region) => (
                            <a key={region} onClick={() => handleFilterByRegion(region)}>
                                {region}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="countries-grid">
                {countries?.length &&
                    countries.map(
                        ({ name: { common: name }, flags: { svg: flag }, capital: [capital], region, population }) => {
                            const props = { flag, name, capital, region, population };
                            return <CountryCard {...props} key={name} />;
                        }
                    )}
            </div>
        </div>
    );
};
