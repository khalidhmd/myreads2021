import React from "react";
import Book from "./Book";

function Shelf({ shelf, books }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {shelf === "currentlyReading"
          ? "Currently Reading"
          : shelf === "read"
          ? "Read"
          : shelf === "wantToRead"
          ? "Want To Read"
          : null}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
