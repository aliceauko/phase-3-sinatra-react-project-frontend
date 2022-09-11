import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import EmployeeForm from "./EmployeeForm";
import Filter from "./Filter";

function TotalList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://phase-3-backend-employee.herokuapp.com/employees")
      .then((r) => r.json())
      .then((employees) => setEmployees(employees));
  }, []);

  function handleDeleteEmployee(deletedEmployee) {
    const updatedEmployees = employees.filter(
      (employees) => employees.id !== deletedEmployee.id
    );
    setEmployees(updatedEmployees);
  }

  function handleUpdateEmployee(updatedEmployee) {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === updatedEmployee.id) {
        return updatedEmployee;
      } else {
        return employee;
      }
    });
    setEmployees(updatedEmployees);
  }

  function handleAddEmployee(newEmployee) {
    setEmployees([...employees, newEmployee]);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const employeesToDisplay = employees.filter((employee) => {
    if (selectedCategory === "All") return true;

    return employee.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <EmployeeForm onAddEmployee={handleAddEmployee} />
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {employeesToDisplay.map((employee) => (
          <Employee
            key={employee.id}
            employee={employee}
            onUpdateEmployee={handleUpdateEmployee}
            onDeleteEmployee={handleDeleteEmployee}
          />
        ))}
      </ul>
    </div>
  );
}

export default TotalList;
