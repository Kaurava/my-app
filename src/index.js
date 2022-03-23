/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class MessageListClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      count: 0,
      messageList: [],
    };
  }

  showmessages(message) {
    return (
      <div>
        <div>
          <p>
            <span>id: {message.id} </span>
            <span>author: {message.author} </span>
            <span>text: {message.text}</span>
          </p>
        </div>
        <button onClick={() => this.removemessage(message)}>delete</button>
      </div>
    );
  }

  sendmessage = (message) => {
    this.setState({
      content: "",
      messageList: [...this.state.messageList, message],
      count: this.state.count + 1,
    });
  };

  removemessage = (message) => {
    this.setState({
      messageList: this.state.messageList.filter(
        (msg) => msg.id !== message.id
      ),
      count: this.state.count == 0 ? 0 : this.state.count - 1,
    });
  };

  render() {
    console.log("this.state", this.state);
    const messages = this.state.messageList;
    const currentid = this.state.count + 1;
    const message = {
      id: currentid,
      author: "author" + currentid,
      text: this.state.content,
    };

    return (
      <div>
        <h1>MessageListClassComponent</h1>
        <input
          value={this.state.content}
          placeholder="ввод сообщения"
          onChange={(e) =>
            this.setState({
              content: e.target.value,
              messageList: [...this.state.messageList],
              count: this.state.count,
            })
          }
        />
        <hr />

        <button onClick={() => this.sendmessage(message)}>send</button>
        <h2>Количество сообщений: {this.state.count}</h2>

        {this.state.count == 0 ? (
          <h2>Сообщений нет</h2>
        ) : (
          messages.map((msg) => this.showmessages(msg))
        )}
      </div>
    );
  }
}


const MessageListFunComponent = ({ onClick }) => {
  const [content, setContent] = useState("");
  const [count, setCount] = useState(0);
  const [messageList, setMessageList] = useState([]);
  const [moving, setMoving] = useState(false);
  console.log("count", count);
  const messages = messageList;
  const currentid = count + 1;
  const message = {
    id: currentid,
    author: "author" + currentid,
    text: content,
  };

  const showmessages = (message) => {
    return (
      <div>
        <div>
          <p>
            <span>id: {message.id} </span>
            <span>author: {message.author} </span>
            <span>text: {message.text}</span>
          </p>
        </div>
        <button onClick={() => removemessage(message)}>delete</button>
      </div>
    );
  };

  const sendmessage = (message) => {
    setMessageList([...messageList, message]);
    setCount((cnt) => cnt + 1);
    setContent("");
    setMoving(false);
  };

  const removemessage = (message) => {
    setMessageList(messageList.filter((msg) => msg.id !== message.id));
    setCount((cnt) => (cnt == 0 ? 0 : count - 1));
    setMoving(true);
  };

  //Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    if (moving) { return; }

    // Робот автоматически отправляет сообщение последнему пользователю
    console.log("count", count);
    if (count == 0) { return; }

    console.log("messageList", messageList);
    const recipient = messageList.find((msg) => msg.id == count).author;
    if (recipient == "robot") { return;}

    console.log("recipient", recipient);
    let timerId = null;
    const replyMessage = {
      id: count + 1,
      author: "robot",
      text: "Ответ Робота",
    };
    console.log("replyMessage", replyMessage.text);
    timerId = setTimeout(() => {
      sendmessage(replyMessage);
    }, 500);

    return () => clearInterval(timerId);
  });

  return (
    <div>
      <h1>MessageListFunComponent</h1>
      <input
        value={content}
        placeholder="ввод сообщения"
        onChange={(e) => setContent(e.target.value)}
      />
      <hr />

      <button onClick={() => sendmessage(message)}>send</button>
      <h2>Количество сообщений: {count}</h2>

      {count == 0 ? (
        <h2>Сообщений нет</h2>
      ) : (
        messages.map((msg) => showmessages(msg))
      )}
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

const App = () => {
  return (
    <>
      <MessageListClassComponent />
      <hr />
      <MessageListFunComponent />
      <hr />
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
