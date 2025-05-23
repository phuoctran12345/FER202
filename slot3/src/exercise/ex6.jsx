import React from "react";

const Ex6 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  const itEmployees = employees.filter(
    (employee) => employee.department === "IT"
  );

  return (
    <div>
      <h2>Exercise 6: IT Department Employees</h2>
      {itEmployees.length === 0 ? (
        <p>No employees in IT department</p>
      ) : (
        <ul>
          {itEmployees.map((employee, index) => (
            <li key={employee.id || index}>
              {employee.name} - {employee.department}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ex6;
