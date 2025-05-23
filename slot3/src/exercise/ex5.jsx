import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 },
];

const Ex5 = () => {
  return (
    <div>
      <h2>Exercise 5: Employee Dropdown Menu</h2>
      <select>
        <option value="" disabled selected>
          Select an employee
        </option>
        {employees.map((employee, index) => (
          <option key={employee.id || index} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Ex5;
