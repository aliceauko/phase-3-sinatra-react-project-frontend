import React, { useState } from "react";

function EmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Director");

  function handleSubmit(e) {
    e.preventDefault();
    const employeeData = {
      name: name,
      category: category,
      is_present: false,
    };
    fetch("http://localhost:9292/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    })
      .then((r) => r.json())
      .then((newEmployee) => onAddEmployee(newEmployee));
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name and Email:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Department:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Director">Director</option>
          <option value="Secretary">Secretary</option>
          <option value="Data">Data</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default EmployeeForm;
