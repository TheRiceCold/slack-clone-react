import styles from "@/styles/client/Client.module.sass";
import images from "@/constants/images";

import {useMessages} from "@/contexts/MessagesContext";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {FC} from "react";

import UserAvatar from "@/components/UserAvatar";
import MessageType from "@/types/MessageType";
import ChatInput from "./ChatInput";

interface IProps {
  type: string;
  id: Number;
};

const Conversations: FC<IProps> = ({ id, type }) => {
  const [isSent, setIsSent] = useState(true);
  const {sendMessage, getMessages} = useMessages();
  const [messageInput, setMessageInput] = useState<string>("");
  const [conversations, setConversations] = useState<MessageType[]>([]);

  useEffect(() => {
    (async() => {
      const data = await getMessages(type, id);
      setConversations(data);
    })()
  }, [isSent]);

  const handleClick = (): void => {
    sendMessage(type, id, messageInput);
    setMessageInput("");
    setIsSent(!isSent);
  };

  return (
    <>
      <section className={styles.conversations}>
        {conversations && conversations.map((
          {
            body,
            created_at, 
            sender: {email},
          }) => (
          <article key={created_at} className={styles.message}>
            <UserAvatar 
              size={36} 
              alt="default user" 
              src={images.defaultUser} 
            />
            <div className={styles.content}>
              <div className={styles.user}>
                <p>{email}</p>
                <p className={styles.date}>
                  {created_at.substring(0, 10)}
                </p>
              </div>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </section>
      <ChatInput
        input={messageInput}
        handleClick={handleClick}
        setInput={setMessageInput}
      />
    </>
  );
};

export default Conversations;
