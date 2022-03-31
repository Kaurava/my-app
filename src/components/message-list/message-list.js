import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./use-styles";

export const MessageList = () => {
  const ref = useRef();
  const { roomId } = useParams();
  const textInput = useRef(null);

  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState({
    room1: [
      {
        author: "Bot",
        message: "Wellcome to chat !",
        date: new Date(),
      },
    ],
  });

  const styles = useStyles();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messageList]);

  const sendMessage = useCallback(
    (message, author = "User") => {
      if (message) {
        setMessageList({
          ...messageList,
          [roomId]: [
            ...(messageList[roomId] ?? []),
            {
              author,
              message,
              date: new Date(),
            },
          ],
        });
        setValue("");
      }
    },
    [messageList, roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        sendMessage("Hello from Bot", "Bot");
      }, 500);
    }

    textInput.current.focus();


    return () => {
      clearInterval(timerId);
    };
  }, [messageList, roomId, sendMessage]);


  useEffect(() => {
    console.log(textInput);
    textInput?.current?.focus?.();
  }, [textInput]);

  const messages = messageList[roomId] ?? [];

  return (
    <>  
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message.date} />
        ))}
      </div>

      <Input
        placeholder="Введите сообщение ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        className={styles.input}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            {value && <Send className={styles.icon} onClick={() => sendMessage(value)} />}
          </InputAdornment>
        }
        autoFocus={true}
        ref={textInput}
      />
    </>
  );
};
