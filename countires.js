const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
const displayCountry = (countries) => {
    const countryContainer = document.getElementById('countires');
    // for (const country of countries) {
    //     const p = document.createElement('p');
    // }
    countries.forEach(country => {
        const h4 = document.createElement('h4');
        h4.innerText = country.name.common;
        countryContainer.appendChild(h4)
        h4.classList.add('country');
    });
}