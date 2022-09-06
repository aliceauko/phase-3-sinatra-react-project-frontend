import React, { useState } from "react";

function EmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Select Role");

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
    
    setCategory('Select Role')
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
        Enter Name and Email address:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Role:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Select Role">Select Role</option>
          <option value="C.E.O">C.E.O</option>
          <option value="Director">Director</option>
          <option value="Secretary">Secretary</option>
          <option value="Data Engineer">Data Engineer</option>
          <option value="Accountant">Accountant</option>
          <option value="Administrative Assistabt">Administrative Assistant</option>

        </select>
      </label>

      <button type="submit" disabled={!name}>Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
