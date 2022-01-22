import React, { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

function Search({ updateBook, books }) {
  const [term, setTerm] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  const handleChange = async (txt) => {
    setTerm(txt);
    try {
      if (txt === "") {
        setSearchBooks([]);
        return;
      }
      const res = await search(txt, 20);

      if (!res.books.error) {
        setSearchBooks(res.books);
      }
      if (res.books.error) {
        setSearchBooks([]);
      }
    } catch (err) {
      setSearchBooks([]);
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
          {searchBooks &&
            searchBooks.map((book) => {
              const userBook = books.find((b) => b.id === book.id);
              if (userBook) book.shelf = userBook.shelf;
              return <Book key={book.id} book={book} updateBook={updateBook} />;
            })}
        </ol>
      </div>
    </div>
  );
}

export default Search;
