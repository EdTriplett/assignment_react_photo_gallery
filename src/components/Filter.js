import React, { Component } from "react";

const Filter = ()=> {

  const filtersArray = ["Normal", "Lark", "Reyes", "Valencia", "Inkwell", "Ludwig"]

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Filter by Filter
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {filtersArray.map(filter => <a className="dropdown-item" href="#">{filter}</a>)}
      </div>
    </div>
  )
}

export default Filter;
