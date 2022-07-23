import styles from "@/styles/client/Client.module.sass";

import {useMessages} from "@/contexts/MessagesContext";
import {FC, useState} from "react";

import Conversations from "@/layouts/client/Conversations";
import SearchUser from "@/layouts/client/SearchUser";
import ChatInput from "@/layouts/client/ChatInput";

const NewMessage: FC = () => {
  const [message, setMessage] = useState("");
  const {
    sendMessage, 
    setSelectedId, 
    selectedId: id,
  } = useMessages();

  const route = id ? `../user/${id}` : ""

  const handleClick = () => {
    if (id) {
      setMessage("");
      setSelectedId(null);
      sendMessage("User", id, message);
    }
    else alert("Select a receiver");
  };

  const chatInputProps = {
    type: "new",
    route: route,
    input: message,
    setInput: setMessage,
    handleClick: handleClick
  };
  
  return (
    <section className={styles.channel}>
      <header className={styles.channel_nav_top}>
        <h4>New message</h4>
      </header>
      <SearchUser />
      <ChatInput {...chatInputProps} />
    </section>
  );
};

export default NewMessage;
