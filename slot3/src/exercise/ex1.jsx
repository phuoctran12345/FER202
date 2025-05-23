import React from 'react';

const employee = { name: "John Doe", age: 30, department: "IT" };

function Ex1() {
  const { name, age , department} = employee;

  return (
      <div>
        <h1>-----------------------------------Question1-------------------------------------</h1>
        <h1>{name}</h1>
        <h2>Age: {age}</h2>
        <h2>Department: {department}</h2>
      </div>
  )
}

export default Ex1;
