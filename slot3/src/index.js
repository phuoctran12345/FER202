import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Ex1 from "./exercise/ex1";
import Ex2 from "./exercise/ex2";
import Ex3 from "./exercise/ex3";
import Ex4 from "./exercise/ex4";
import Ex5 from "./exercise/ex5";
import Ex6 from "./exercise/ex6";
import Ex7 from "./exercise/ex7";
import Ex8 from "./exercise/ex8";
import Ex9 from "./exercise/ex9";
import Ex10 from "./exercise/ex10";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Ex1 />
    <Ex2 />
    <Ex3 />
    <Ex4 />
    <Ex5 />
    <Ex6 />
    <Ex7 />
    <Ex8 />
    <Ex9 />
    <Ex10 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
