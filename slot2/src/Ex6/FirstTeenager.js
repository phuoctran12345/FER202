const people = [
    {name: "hung" , age: 12},
    {name: "toan" , age: 24},
    {name: "khang" , age: 30},
    {name: "phat" , age: 18},
]

function FirstTeenager() {
    
    return (
        <div>
            <h4>----------------------------------------------Exercise 6---------------------</h4>
            <h5>Fist people is teenager : {people.find(pp => (pp.age >= 10) && (pp.age <= 20)).name }</h5>
        </div>

    )
}

export default FirstTeenager;