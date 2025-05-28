import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 },
];

const averageAge = (ages) => {
  if (ages.length === 0) return 0;
  const sum = ages.reduce((total, age) => total + age, 0); // hàm tích luỹ (Accumulator)
  return sum / ages.length;
};

const Ex4 = () => {
  const ages = employees.map((employee) => employee.age); // dùng hàm call back lấy các cột age từ employees
  const avgAge = averageAge(ages);

  return (
    <div>
      <h2>
        ----------------------------Exercise 4: Employee Table with Average
        Age----------------------------
      </h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id || index}>
              <td>{employee.id || index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Average Age: {avgAge.toFixed(2)}</p>
    </div>
  );
};

export default Ex4;
