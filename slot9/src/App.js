// import "./App.css";
// import Welcome from "./components/Welcome";
//
// function App() {
//   return (
//       <div>
//           <h1>Ex1</h1>
//           <>
//               <Welcome name="traltb@fe.edu.vn" />
//               <Welcome name="fptdn@fe.edu.vn" />
//           </>
//       </div>
//   );
// }
//
// export default App;
//

import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import React from "react";
 import { Table, Card, Container, Row, Col } from "react-bootstrap";

function App() {
    const userData = { name: "traltb@fe.edu.vn", age: 39 };
    const students = [
        { name: "traltb1@fe.edu.vn", age: 39, avatar: "images/student1.png" },
        { name: "traltb2@fe.edu.vn", age: 40, avatar: "images/student2.png" },
        { name: "traltb3@fe.edu.vn", age: 41, avatar: "images/student3.png" },
    ];
    return (
       // <div>
       //     <h1>Exercise 2</h1>
       //     <>
       //         <Welcome name="traltb@fe.edu.vn" />
       //         <UserProfile user={userData} />
       //     </>
       // </div>
       //  <Card style={{ width: '18rem' }}>
       //      <Card.Body>
       //          <Card.Title>
       //              <Welcome name="traltb@fe.edu.vn"/>
       //          </Card.Title>
       //          <Card.Text>
       //              <UserProfile user={userData} />
       //          </Card.Text>
       //      </Card.Body>
       //  </Card>
       //  <Table striped bordered hover>
       //      <thead>
       //      <tr>
       //          <th>#</th>
       //          <th>ten</th>
       //          <th>tuoi</th>
       //      </tr>
       //      </thead>
       //      <tbody>
       //      <tr>
       //          <td>1</td>
       //          <td><Welcome name="traltb@fe.edu.vn"/></td>
       //          <td>user={userData.age}</td>
       //      </tr>
       //      </tbody>
       //  </Table>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Tên</th>
                <th>Tuổi</th>
            </tr>
            </thead>
            <tbody>
            {students.map((student, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                        <Welcome name={student.name} />
                    </td>
                    <td>{student.age}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default App;

// import NameList from "./components/NameList";
// import UserProfile from "./components/UserProfile";
// import Welcome from "./components/Welcome";
//
// function App() {
//     const userData = { name: "traltb@fe.edu.vn", age: 39 };
//     const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
//     return (
//         <div>
//             <h1>Exercise 3</h1>
//             <>
//                 <Welcome name="traltb@fe.edu.vn" />
//                 <UserProfile user={userData} />
//                 <NameList names={namesList} />
//             </>
//         </div>
//     );
// }
//
// export default App;
//
// import NameList from "./components/NameList";
// import UserProfile from "./components/UserProfile";
// import Welcome from "./components/Welcome";
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // Dùng Container, Row, Col để bố trí các Card
// import StudentCard from "./components/StudentCard"; // Import StudentCard component
//
// function App() {
//     const userData = { name: "traltb@fe.edu.vn", age: 39 };
//     const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
//     //Danh sach students
//     const students = [
//         { name: "traltb1@fe.edu.vn", age: 39, avatar: "images/student1.png" },
//         { name: "traltb2@fe.edu.vn", age: 40, avatar: "images/student2.png" },
//         { name: "traltb3@fe.edu.vn", age: 41, avatar: "images/student3.png" },
//     ];
//     return (
//         <>
//             <Welcome name="traltb@fe.edu.vn"/>
//             <UserProfile user={userData}/>
//             <h1>Hello </h1>
//             <NameList names={namesList}/>
//             <Container>
//                 <h1 className="my-4 text-center">Student information</h1>
//                 <Row>
//                     {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
//                     {students.map((student, index) => (
//                         <Col key={index} sm={12} md={4}>
//                             <StudentCard student={student}/>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </>
//     );
// }
//
// export default App;
