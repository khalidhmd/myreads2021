import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";

function Search() {
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function searchBooks(term) {
      try {
        const res = await search(term, 20);
        setBooks(res);
        console.log(res);
      } catch (err) {
        console.log(err.message);
      }
    }
    searchBooks();
  }, [term]);
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
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
}

export default Search;
