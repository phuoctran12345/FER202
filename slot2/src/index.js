import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NamePerson from "./Ex2/NamePerson";
import PersonDetail from "./Ex3/PersonDetail";
import PeopleList from "./Ex4/PeopleList";
import DisplayTable from "./Ex5/DisplayTable";
import FindTheFirstTeenager from "./Ex6/FirstTeenager";
import AreAllTeenager from "./Ex 7 8 9 10/AreAllTeenagers";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PersonDetail />
    <PeopleList />
    <DisplayTable />
    <FindTheFirstTeenager />
    <AreAllTeenager /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
