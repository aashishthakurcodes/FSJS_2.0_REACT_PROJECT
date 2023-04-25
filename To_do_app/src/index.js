import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Todo from "./Todo/Todo";

const Header = () => {
  return(
    <Todo/>
  )
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
