import "./App.css";
import { useState } from "react";
import Search from "./componenets/Search";
import Home from "./componenets/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
