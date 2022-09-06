import React from "react";

function Filter({ category, onCategoryChange }) {
  return (
    <div className="Filter">
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by Role</option>
        <option value="Director">Director</option>
        <option value="Data">Data</option>
        <option value="Secretary">Secretary</option>
        <option value="Accountant">Accountant</option>
       
      </select>
    </div>
  );
}

export default Filter;
