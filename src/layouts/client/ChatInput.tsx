import styles from "@/styles/client/Client.module.sass";

import {useUsers} from "@/contexts/UsersContext";
import {HiPaperAirplane} from "react-icons/hi";
import {Link} from "react-router-dom";
import {FC, Dispatch} from "react";
import {
  SetStateAction,
  KeyboardEvent,
  ChangeEvent,
  useEffect, 
  useState, 
  useRef, 
} from "react";

interface IProps {
  type?: string;
  input: string;
  route?: string;
  handleClick: () => any;
  setInput: Dispatch<SetStateAction<string>>;
};

const ChatInput: FC<IProps> = ({
  type,
  input,
  route,
  setInput,
  handleClick,
}) => {
  const [active, setActive] = useState(false);

  const sendButtonProps = {
    to: route ? route : "",
    active: active ? 0 : 1
  };

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInput(target.value);
    setActive(!!target.value);
  };
  
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") 
      handleClick();
  };

  const sendButtonComponent = (type === "new") ? (
    <Link onClick={handleClick} {...sendButtonProps}>
      <HiPaperAirplane 
        size={18}
        color="#fff"
        style={{
          transform: "rotate(90deg)",
          opacity: active ? 1 : 0.25,
          pointerEvents: active ? "auto" : "none",
        }}
      />
    </Link>
  ) : (
    <button {...sendButtonProps}>
      <HiPaperAirplane
        size={18}
        color="#fff"
        style={{
          transform: "rotate(90deg)",
          opacity: active ? 1 : 0.25,
          pointerEvents: active ? "auto" : "none",
        }}
      />
    </button>
  );

  return (
    <div className={styles.chat_input}>
      <div className={styles.container}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Message here..."
        />
        {sendButtonComponent}
      </div>
    </div>
  );
};

export default ChatInput;
