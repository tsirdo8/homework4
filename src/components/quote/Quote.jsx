import { useState } from "react";
import "./Quote.css"; // Import the CSS file for styling

const QuoteGenerator = () => {
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "Whether you think you can or think you can’t, you’re right.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-generator-container">
      <h2 className="quote-heading">Random Quote</h2>
      <p className="quote-text">{quote}</p>
      <button onClick={generateQuote} className="quote-button">
        Generate New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
