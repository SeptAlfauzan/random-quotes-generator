import Spinner from "./Spinner";

export default function Quote({ quote, author, loading }) {
  return (
    <div className="center">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <p id="text">"{quote}"</p>
          <p id="author">- {author}asdsd</p>
        </>
      )}
    </div>
  );
}
