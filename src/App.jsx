import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import TodoApp from "./components/Todo/Todo";
import Card from "./components/card/Card";
import QuoteGenerator from "./components/quote/Quote";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <TodoApp />
      <Card
        title="Beautiful Sunset"
        image="https://example.com/sunset.jpg"
        description="A breathtaking sunset over the mountains."
      />
      <Counter />
      <QuoteGenerator/>
      <div
        style={{
          background: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
          height: "100vh",
        }}
      >
        <button onClick={toggleTheme}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
