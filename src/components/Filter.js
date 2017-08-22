import React, { Component } from "react";

const Filter = ({ onClick, selectedFilter }) => {
  const filtersArray = [
    "Normal",
    "Lark",
    "Reyes",
    "Valencia",
    "Inkwell",
    "Ludwig"
  ];

  return (
    <div id="ROOOOOOT">
      <select className="form-control" name="selectedFilter" onChange={onClick}>
        {filtersArray.map(filter =>
          <option
            className="dropdown-item"
            name="selectedFilter"
            value={filter}
            key={filter}
            onClick={onClick}
          >
            {filter}
          </option>
        )}
      </select>
      <p>
        YOU HAVE SELECTED {selectedFilter}
      </p>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false" 
        >
          Filter by Filter
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <p>
            you have selected: {selectedFilter}
          </p>
          {filtersArray.map(filter =>
            <a
              className="dropdown-item"
              href="#"
              name="selectedFilter"
              value={filter}
              onClick={onClick}
            >
              {filter}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
