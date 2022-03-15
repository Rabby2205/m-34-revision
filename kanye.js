const loadQuot = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => diplayQuote(data))
}
const diplayQuote = (quote) => {
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = quote.quote;

}
