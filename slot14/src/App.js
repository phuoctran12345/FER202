import React from "react";
import MyFormExample4 from "./components/MyFormExample4";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const handleFormSubmit = (formData) => {
        console.log("Dữ liệu đã gửi:", formData);
    };

    return (
        <div className="App" style={{ padding: "30px" }}>
            <h1 className="mb-4">Ứng Dụng React</h1>
            <MyFormExample4 title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
        </div>
    );
};

export default App;
