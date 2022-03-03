import React from "react";
import ReactDOM from "react-dom";
//import {App} from './App';

import "./index.css";

const Message = (props) => {
  console.log("props", props);
  return (
    <div className="container">
      <h1>
        <p className="wellcome">{props.hello}</p> {props.content}
      </h1>
    </div>
  );
};

const FunctionComponent = ({wellcome}) => {
  return (
    <div>
      <Message hello={wellcome} content="FunctionComponent"/>
    </div>
  );
};

const CopyrightComponent = () => {
  return (
    <div>
      <p>
        &copy; 2022 <b>Все права защищены</b>
      </p>
    </div>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <FunctionComponent wellcome="Hello from" />

    <CopyrightComponent />
  </React.StrictMode>,
  document.getElementById("root")
);