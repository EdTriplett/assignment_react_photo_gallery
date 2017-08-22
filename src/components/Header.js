import React, { Component } from "react";
import Filter from "./Filter.js"
import Sort from "./Sort.js"
import SearchBar from "./SearchBar.js"

class Header extends Component {
  constructor() {
    super()
      this.state = {
        selectedFilter: "",
        searchText: "",
        sortField: ""
      }
  }

  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <SearchBar />
          <Filter />
          <Sort />
        </div>
      </nav>
    )
  }
}
export default Header;