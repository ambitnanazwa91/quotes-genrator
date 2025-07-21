const quote = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

async function fetchQuote() {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();
    quote.textContent = `"${data[0].q}" - ${data[0].a}`;
  } catch (error) {
    console.error('Error fetching quote:', error);
    quote.textContent = 'Nie udało się pobrać cytatu. Spróbuj ponownie.';
  }
}

newQuoteButton.addEventListener('click', fetchQuote);