const people = [
    {name: "hung" , age: 12 ,occupation: "saler"},
    {name: "toan" , age: 24 ,occupation: "manager" },
    {name: "khang" , age: 30 ,occupation: "staff" },
    {name: "phat" , age: 18 ,occupation: "docter"},
    {name: "thu" , age: 19 ,occupation: "docter"},
]

function sortByOccupationAndAge(people) {
    return people.sort((a,b) => {
        //sort by occupation alphabetically
        const occupationComparison  = a.occupation.localeCompare(b.occupation);
        if (occupationComparison !== 0) {
            return occupationComparison;
        }

        // sort by age ascending
        if (a.age < b.age) {
            return -1;
        } else if (a.age > b.age) {
            return 1;
        }
        return 0;
    });
}

function groupByOccupation(people) {
    return people.reduce((acc, person ) => {
        const { occupation } = person; 
        // nếu nghề nghiệp không tồn tại -> trả về array rỗng 
        if (!acc[occupation]) {
            acc[occupation] = [];
        }

        // add person 
        acc[occupation].push(person); 
        return acc;
    } , {}) 
}

function displayOldestAndYoungest(people) {
    if (!people || people.length === 0) {return "Array is empty or invalid"}

    let oldestPerson = people[0];
    let youngestPerson = people[0];
  
    for (let i = 1; i < people.length; i++) {
      const currentPerson = people[i];
  
      if (currentPerson.age > oldestPerson.age) {
        oldestPerson = currentPerson;
      }
  
      if (currentPerson.age < youngestPerson.age) {
        youngestPerson = currentPerson;
      }
    }
  
    return {
      oldest: oldestPerson,
      youngest: youngestPerson,
    };
}

function calculateAverageAgeByOccupation(people) {
    const grouped = people.reduce((acc, person) => {
      const { occupation, age } = person;
      if (!acc[occupation]) {
        acc[occupation] = { sum: 0, count: 0 };
      }
      acc[occupation].sum += age;
      acc[occupation].count += 1;
      return acc;
    }, {});
  
    return Object.keys(grouped).reduce((acc, occupation) => {
      acc[occupation] = (grouped[occupation].sum / grouped[occupation].count).toFixed(2);
      return acc;
    }, {});
}


function AreAllTeenager() {
    const sortedPeople = sortByOccupationAndAge(people);
    const groupedPeople = groupByOccupation(people);
    const result = displayOldestAndYoungest(people);
    const averageAges = calculateAverageAgeByOccupation(people);

    return (
        <div>
            <h4>----------------------------------------------Exercise 7---------------------</h4>
            <h3>
                Check if all are teenager? Result {people.find(people => (people.age <= 10) || (people.age >= 20))
                 === "undefined" ?  "True": "False"}
            </h3>
            <h4>----------------------------------------------Exercise 8---------------------</h4>
            <h3>Sorted by Occupation and age </h3>
            <ul>
                {sortedPeople.map((person , index) => (
                    <li key={index}>
                        name: {person.name} , age : {person.age}, occupation: {people.occupation}
                    </li>
                ))} 
            </ul>
            <h4>----------------------------------------------Exercise 9.1---------------------</h4>
            <h3>Groupd by Occupation</h3>
            {Object.keys(groupedPeople).map(occupation => (
                <div key={occupation}>
                <h4>{occupation}</h4>
                <ul>
                    {groupedPeople[occupation].map((person, index) => (
                    <li key={index}>
                        Name: {person.name}, Age: {person.age}
                    </li>
                    ))}
                </ul>
                </div>
            ))}

            <h4>----------------------------------------------Exercise 9.2---------------------</h4>
            <h3>
                Oldest person: {result.oldest.name} (Age: {result.oldest.age}, Occupation: {result.oldest.occupation})<br />
                Youngest person: {result.youngest.name} (Age: {result.youngest.age}, Occupation: {result.youngest.occupation})
            </h3>
            <h4>----------------------------------------------Exercise 10---------------------</h4>
            <h3>Average Age by Occupation:</h3>
            <ul>
                {Object.keys(averageAges).map(occupation => (
                <li key={occupation}>
                    Occupation: {occupation}, Average Age: {averageAges[occupation]}
                </li>
                ))}
            </ul>


        </div>
    )
}

export default AreAllTeenager;