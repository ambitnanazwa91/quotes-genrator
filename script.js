const quote = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

async function fetchQuote() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    quote.textContent = `"${data.value}"`;
  } catch (error) {
    console.error('Error fetching quote:', error);
    quote.textContent = 'Nie udało się pobrać cytatu. Spróbuj ponownie.';
  }
}

newQuoteButton.addEventListener('click', fetchQuote);

