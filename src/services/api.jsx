import axios from 'axios'

export async function getCountries(setCountries) {
    const URL = 'https://restcountries.com/v3.1/all'
    const data = await getData(URL)

    return setCountries(data)
}

function getData(URL) {
    const data = axios
        .get(URL)
        .then(res => res.data)
        .catch(err => console.log(err))

    return data
}

// TODO: 
// const URL = 'https://restcountries.com/v3.1/'

// const fetchCountries = async ({ name = null, region = null }) => {
//     let filterBy = name ? `name/${name}` : 'all'
//     filterBy = region ? `region/${region}` : filterBy
//     const response = await fetch(
//         `${URL}${filterBy}?fields=name,capital,population,region,flags`
//     ).then(response => response.json())
//     setCountries(response)
// }
