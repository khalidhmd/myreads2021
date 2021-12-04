import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

function Home({ books }) {
  const shelves = { currentlyReading: [], read: [], wantToRead: [] };
  books.forEach((book) => {
    shelves[book.shelf].push(book);
  });
  console.log(books);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {Object.keys(shelves).map((shelf) => {
          return <Shelf key={shelf} shelf={shelf} books={shelves[shelf]} />;
        })}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Home;
