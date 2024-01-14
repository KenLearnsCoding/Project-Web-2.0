document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_KEY' with your actual TradingView API key
    const apiKey = 'YOUR_API_KEY';
    const symbol = 'BINANCE:BTCUSDT'; // Replace with the symbol of the coin you want to track

    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;

    // Fetch data from the TradingView API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extract the price from the response
            const currentPrice = data.c;

            // Display the price on the web page
            const priceElement = document.getElementById('coin-price');
            priceElement.textContent = `Current Price: ${currentPrice}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const priceElement = document.getElementById('coin-price');
            priceElement.textContent = 'Error fetching data';
        });
});
