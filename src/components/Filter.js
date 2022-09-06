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
        <option value="C.E.O">C.E.O</option>
        <option value="Director">Director</option>
        <option value="Data">Data</option>
        <option value="Secretary">Secretary</option>
        <option value="Accountant">Accountant</option>
        <option value="Administrative assistant">Administrative assistant</option>
       
      </select>
    </div>
  );
}

export default Filter;
