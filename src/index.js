import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messageList: []
    }
  }

  addmessage = () => {
    this.setState({
      messageList: [...this.state.messageList, "newmessage"]
    })
  }

  removemessage = (id) => {
    this.setState({
      films: this.state.films.filter(msg => msg !== id)
    })
  }

  render() {
    const {messageList} = this.state
    console.log("this.state", this.state);
    return (
      <div>
        <h1>ClassComponent</h1>
        <hr />

        <button onClick = {() => this.addmessage}>add</button>
        {messageList.map(msg => (
          <div>
            <h3>{messageList}</h3>
            <button onClick = {() => this.removemessage(msg)}>remove</button>
          </div>
        ))}
      </div>
    );
  }
}

const CopyrightComponent = () => {
  return (
    <div>
      <p>
        &copy; 2022 <b>Все права защищены</b>
      </p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <ClassComponent />
      <CopyrightComponent />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
