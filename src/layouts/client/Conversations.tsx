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
  const [isSent, setIsSent] = useState(false);
  const {sendMessage, getMessages} = useMessages();
  const [message, setMessage] = useState<string>("");
  const [conversations, setConversations] = useState<MessageType[]>([]);

  useEffect(() => {
    (async() => {
      const data = await getMessages(type, id);
      setConversations(data);
    })()
  }, [id, isSent]);

  const handleClick = (): void => {
    sendMessage(type, id, message);
    setIsSent(!isSent);
    setMessage("")
  };

  return (
    <>
      <section className={styles.conversations}>
        {conversations && conversations.map(({sender: {email}, created_at, body}, index) => (
          <article className={styles.message}>
            <UserAvatar size={36} src={images.defaultUser} alt="default user" />
            <div className={styles.content}>
              <div className={styles.user}>

              </div>
            </div>
          </article>
        ))}
      </section>
      <ChatInput
        input={message}
        setInput={setMessage}
        handleClick={handleClick}
      />
    </>
  );
};

export default Conversations;
