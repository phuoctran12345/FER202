function NamePerson() {
  const names = ["Alice", "bob", "Charlie"];
  return (
    <div>
         <h4>----------------------------------------------Exercise 2---------------------</h4>
      <ul>
        {names.map((name, index) => (
          <li key={index}> {name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NamePerson;
