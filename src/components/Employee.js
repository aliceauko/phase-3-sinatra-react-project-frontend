import React from 'react'

function Employee({employee, onUpdateEmployee, onDeleteEmployee}) {
    function handleDeleteClick(){
        fetch(`http://localhost:9292/employee/${employee.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(() => onDeleteEmployee(employee));
        }
        function handleIsPresentClick() {
            fetch(`http://localhost:9292/employee/${employee.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                is_present: !employee.is_present,
              }),
            })
              .then((r) => r.json())
              .then((updatedEmployee) => onUpdateEmployee(updatedEmployee));
          }


  return (
    <li className={item.isInCart ? "in-cart" : ""}>
    <span>{employee.name}</span>
    <span className="category">{employee.category}</span>
    <button
      className={item.isInCart ? "remove" : "add"}
      onClick={handleIsPresentClick}
    >
      {employee.is_present ? "Remove From" : "Add to"} Cart
    </button>
    <button className="remove" onClick={handleDeleteClick}>
      Delete
    </button>
  </li>
    
  )
}

export default Employee
