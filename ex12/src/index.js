import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ColorSwitcher from "./Components/ColorSwithcher";
import Counter from "./Components/Counter";
import DragDropList from "./Components/DragDropList";
import InputField from "./Components/InputField";
import SearchFilter from "./Components/SearchFilter";
import TodoList from "./Components/TodoList";
import ToggleVisibility from "./Components/ToggleVisibility";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TodoList/>
      <ColorSwitcher/>
      <Counter/>
      <DragDropList/>
      <InputField/>
      <SearchFilter/>
      <ToggleVisibility/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
