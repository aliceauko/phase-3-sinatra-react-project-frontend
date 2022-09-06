import React from "react";

function Filter({ category, onCategoryChange }) {
  return (
    <div className="Filter">
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Director">Director</option>
        <option value="Accountant">Accountant</option>
        <option value="Data">Data</option>
      </select>
    </div>
  );
}

export default Filter;
