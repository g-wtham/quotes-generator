const getQuoteBtn = document.querySelector('.inputButton');

getQuoteBtn.addEventListener('click', getQuote);

function getQuote() {
    const apiURL = "https://type.fit/api/quotes";

    fetch(apiURL).then((handleResponse)=>{
        return handleResponse.json().then((data)=>{
            const randomIndex = Math.floor(Math.random() * data.length);
            const quote = data[randomIndex].text;
            const quoteElement = document.querySelector('.generated-quote p');
            quoteElement.textContent = quote;
        }
        )
    }
    );
}
