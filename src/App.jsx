import React from "react";
import ActionButtons from "./componets/ActionButtons";
import Quote from "./componets/Quote";
import QuoteBox from "./componets/QuoteBox";

function App() {
  const [quotes, setQuotes] = React.useState([
    {
      quote: "",
      author: "",
    },
  ]);
  const [selected, setSelected] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const fecthQuotes = async () => {
    const url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    const res = await fetch(url);
    const raw = await res.json();
    const random = Math.floor(Math.random() * raw.quotes.length);

    setSelected(random);
    setQuotes(raw.quotes);
    setLoading(false);
  };

  const handleNextQuote = () => {
    setLoading(true);
    const random = Math.floor(Math.random() * quotes.length);
    setSelected(random);
    setLoading(false);
  };

  React.useEffect(() => {
    fecthQuotes();
  }, []);

  return (
    <main>
      {quotes && (
        <QuoteBox>
          <Quote
            loading={loading}
            quote={quotes[selected].quote}
            author={quotes[selected].author}
          />
          <ActionButtons
            quote={quotes[selected].quote}
            author={quotes[selected].author}
            nextAction={handleNextQuote}
          />
        </QuoteBox>
      )}
    </main>
  );
}

export default App;
