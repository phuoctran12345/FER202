import React from "react";

const Ex7 = () => {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  if (!employees || !Array.isArray(employees)) {
    return <div>Invalid employee data</div>;
  }

  const sortedEmployees = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) return deptCompare;
    return a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h2>Exercise 7: Employees Sorted by Department and Name</h2>
      {sortedEmployees.length === 0 ? (
        <p>No employees to display</p>
      ) : (
        <ul>
          {sortedEmployees.map((employee, index) => (
            <li key={employee.id || index}>
              {employee.name} - {employee.department}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ex7;
