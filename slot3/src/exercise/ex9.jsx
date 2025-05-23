import React from "react";

const Ex9 = () => {
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

  const isTeenager = employees.some((e) => e.age >= 10 && e.age <= 20);

  return (
    <div>
      <h2>Exercise 9: Check for Teenager Employees</h2>
      <p>Is there any teenager (age 10-20)? {isTeenager.toString()}</p>
    </div>
  );
};

export default Ex9;
