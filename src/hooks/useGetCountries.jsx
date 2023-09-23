import getData from '@/services/api'

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
