const Info = ({ label, value }) => (
    <p>
        <b>{label}:</b> {value}
    </p>
);

export const CountryCard = ({ name, flag, region, population, capital }) => {
    return (
        <div className="country-card">
            <figure style={{ '--bgFlag': `url("${flag}")` }}></figure>
            <div className="card-body">
                <h3>{name}</h3>
                <Info label="Population" value={population} />
                <Info label="Region" value={region} />
                <Info label="Capital" value={capital} />
            </div>
        </div>
    );
};
