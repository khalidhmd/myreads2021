import "./App.css";
import { useEffect, useState } from "react";
import Search from "./componenets/Search";
import Home from "./componenets/Home";
import { Routes, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await getAll();
      setBooks(response);
    }
    fetchData();
  }, [shelves]);

  const updateBook = async (book, shelf) => {
    const res = await update(book, shelf);
    setShelves(res);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home books={books} updateBook={updateBook} />}
        />
        <Route
          path="/search"
          element={<Search books={books} updateBook={updateBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
