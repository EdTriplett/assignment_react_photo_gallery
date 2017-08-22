import React, { Component } from "react";
import Filter from "./Filter.js";
import Sort from "./Sort.js";
import SearchBar from "./SearchBar.js";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      selectedFilter: "",
      searchText: "",
      sortField: ""
    };
  }
  onClick = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
        // selectedFilter: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <SearchBar />
          <Filter
            onClick={this.onClick}
            selectedFilter={this.state.selectedFilter}
          />
          <Sort />
        </div>
      </nav>
    );
  }
}
export default Header;
