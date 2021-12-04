import "./App.css";
import { useEffect, useState } from "react";
import Search from "./componenets/Search";
import Home from "./componenets/Home";
import { Routes, Route } from "react-router-dom";
import { getAll } from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getAll();
      setBooks(response);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home books={books} />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
