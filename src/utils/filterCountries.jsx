function filterCountries(data, filterByRegion, filterByText, displayCount) {
    const isMatchingText = text =>
        !filterByText || text.toLowerCase().startsWith(filterByText.toLowerCase())

    return data
        .filter(country => {
            const matchesRegion = !filterByRegion || country.region === filterByRegion

            const matchesName = isMatchingText(country.name.common)
            const matchesCca2 = isMatchingText(country.cca2)
            const matchesCca3 = isMatchingText(country.cca3)
            const matchesNativeName =
                country.name.nativeName &&
                isMatchingText(Object.values(country.name.nativeName)[0].common)

            return matchesRegion && (matchesName || matchesCca2 || matchesCca3 || matchesNativeName)
        })
        .slice(0, displayCount)
}

export default filterCountries
