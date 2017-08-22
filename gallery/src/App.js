import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Gallery from "./Gallery.js";
import SearchBar from "./SearchBar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Gallery</h1>
        </div>
        <Header />
        <Gallery />
      </div>
    );
  }
}

export default App;
