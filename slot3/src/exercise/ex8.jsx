import React from "react";

const Ex8 = () => {
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

  // Nhóm các đối tượng theo department
  const groupedEmployees = employees.reduce((acc, employee) => {
    const dept = employee.department;
    acc[dept] = acc[dept] || [];
    acc[dept].push(employee);
    return acc;
  }, {});

  return (
    <div>
      <h2>Exercise 8: Employees Grouped by Department</h2>
      {Object.keys(groupedEmployees).length === 0 ? (
        <p>No employees to display</p>
      ) : (
        Object.entries(groupedEmployees).map(([dept, empList]) => (
          <div key={dept}>
            <h3>{dept}</h3>
            <ul>
              {empList.map((employee, index) => (
                <li key={employee.id || index}>
                  {employee.name} - {employee.department}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Ex8;
