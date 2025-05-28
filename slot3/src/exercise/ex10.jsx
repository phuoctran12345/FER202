import React, { useState } from "react";

const Ex10 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  if (!employees || !Array.isArray(employees)) {
    return <div>Invalid employee data</div>;
  }

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Exercise 10: Search Employees by Name</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredEmployees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <ul>
          {filteredEmployees.map((employee, index) => (
            <li key={employee.id || index}>
              {employee.id ? employee.id : "Null"} - {employee.name} -{" "}
              {employee.department} (Age: {employee.age})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ex10;
