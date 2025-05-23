import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 },
];

const Ex3 = () => {
  return (
    <div>
      <h2>
        ----------------------------Exercise 3: Employee
        Table----------------------------
      </h2>
      <table>
        <thead>
          {" "}
          {/*hàng tiêu đề*/}
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {/* Hàng chứa data*/}
          {employees.map((employee, index) => (
            <tr key={employee.id || index}>
              <td>{employee.id || index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ex3;
