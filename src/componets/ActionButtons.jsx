export default function ActionButtons({ nextAction, quote, author }) {
  return (
    <div className="flex between end">
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${quote}%22%20${author}`}
        target="_blank"
      >
        <i className="fa fa-twitter"></i>
      </a>
      <button id="new-quote" onClick={nextAction}>
        New Quotes
      </button>
    </div>
  );
}
