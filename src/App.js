import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState();
  const fetchData = async () => {
    const response = await fetch("https://api.quotable.io/random");

    const data = await response.json();
    setQuotes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return quotes ? (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Quote Right Now</h1>
      <div className="quote-body">
        <h3>
          {quotes.content} <span> by {quotes.author}</span>
        </h3>
        <div className="todo-quote">
          {quotes.tags.map((tag, index) => {
            return <h5 key={index}>{tag}</h5>;
          })}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            return fetchData();
          }}
        >
          Generate New Quote
        </button>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
