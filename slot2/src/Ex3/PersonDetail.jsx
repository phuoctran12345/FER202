const p1 = {
    name:   "John", 
      age: 30,
       occupation :"Bussiness Analyst"
};


function PersonDetail() {
    return (
        <div>
             <h4>----------------------------------------------Exercise 3---------------------</h4>
            <ul>
                <p>Name: {p1.name}</p>
                 <p>Age: ${p1.age}</p>   
                 <p>Occupation : ${p1.occupation}</p>            
            </ul>                
        </div>
    )
}

export default PersonDetail;