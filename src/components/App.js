import React, { Component } from "react";
import "./../App.css";
import Gallery from "./Gallery.js";
import Header from "./Header.js"

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
