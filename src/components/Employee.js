import React from "react";

function Employee({ employee, onDeleteEmployee }) {
  function handleDeleteClick() {
    fetch(`https://phase-3-backend-employee.herokuapp.com/employee/${employee.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteEmployee(employee));
  }

  return (
    <li className={employee.is_present ? "in-cart" : ""}>
      <span>{employee.name}</span>
      <span className="category">{employee.category}</span>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default Employee;
