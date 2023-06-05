import './style.css';

const quotes = [
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best revenge is massive success. - Frank Sinatra",
    'Be yourself; everyone else is already taken.',
    'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    'In three words I can sum up everything I\'ve learned about life: it goes on.',
    'You only live once, but if you do it right, once is enough.',
    'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
  ];
  
  const quoteElement = document.getElementById('quote');
  const generateButton = document.getElementById('generate-button');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
  }
  
  generateButton.addEventListener('click', generateRandomQuote);
  
  // Initial quote generation
  generateRandomQuote();
  