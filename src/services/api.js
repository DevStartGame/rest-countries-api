import axios from 'axios'

/*
 * @param setCountries - hook(useState) que guardará todos os dados dos países da página Home
 */
export async function getCountries(setCountries) {
    const URL = 'https://restcountries.com/v3.1/all'
    const data = await getData(URL)

    return setCountries(data)
}

/*
 * @param setCountry - hook(useState) que guardará todos os dados dos país da página Details
 * @param {string} name - nome do país q virá da função "useParams()" do react router
 */
export async function getCountry(setCountry, name) {
    const URL = `https://restcountries.com/v3.1/name/${name}`
    const data = await getData(URL)

    return setCountry(data)
}

function getData(URL) {
    const data = axios
        .get(URL)
        .then(res => res.data)
        .catch(err => console.log(err))

    return data
}

// TODO: realocar lógica na função getCountries
// const URL = 'https://restcountries.com/v3.1/'

// const fetchCountries = async ({ name = null, region = null }) => {
//     let filterBy = name ? `name/${name}` : 'all'
//     filterBy = region ? `region/${region}` : filterBy
//     const response = await fetch(
//         `${URL}${filterBy}?fields=name,capital,population,region,flags`
//     ).then(response => response.json())
//     setCountries(response)
// }
