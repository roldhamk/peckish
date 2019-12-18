import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { render } from "react-dom";

function App() {
  return (
    <div className="App">
      <h1>peckish</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
