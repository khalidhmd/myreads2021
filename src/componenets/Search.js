import React, { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

function Search({ updateBook }) {
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleChange = async (txt) => {
    setTerm(txt);
    try {
      const res = await search(txt, 20);
      console.log(res);
      setBooks(res);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={term}
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} updateBook={updateBook} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;
