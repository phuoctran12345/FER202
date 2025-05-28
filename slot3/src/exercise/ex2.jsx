import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 },
];

const Ex2 = () => {
  return (
    <div>
      <h2>
        ----------------------------Exercise 2: Employee List
        -------------------------------
      </h2>
      <ul>
        {employees.map((employee, i) => (
          <li key={employee.id || i}>
            {employee.name} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex2;
