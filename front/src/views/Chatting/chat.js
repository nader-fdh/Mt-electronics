import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pusher from "pusher-js";
import axios from "axios";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import "./chat.css";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    axios.get("/chat/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("151d3de98e3e8038411a", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  console.log(nameMessage);

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/chat/messages/new", {
      message: input,
      name: messages.name,
      timestamp: messages.timestamp,
      received: true,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Hello {auth.user.fname} </h3>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) => (
          <p className="chat_message">
            <span className="chat_name"></span>
            {message.message}
            <span className="chat_timestamp">
              {new Date().toLocaleTimeString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <form className="form_footer">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input_footer"
            placeholder="Type your name : your repport"
            type="text"
          />

          <button onClick={sendMessage} type="submit">
            send a message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
