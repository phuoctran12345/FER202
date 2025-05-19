const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

  export default function PeopleList() {
    const listItems = people.map(person =>
      <li>{person}</li>
    );
    return <h4>
        <h4>----------------------------------------------Exercise 4---------------------</h4>
         <ul>
             <li>
                 {listItems}
            </li>
        </ul>
    </h4> ;
  }