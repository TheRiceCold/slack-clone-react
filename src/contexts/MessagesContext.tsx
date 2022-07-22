import {uniqueByKey} from "@/utils/helpers";
import {useAuth} from "./AuthContext";
import {AxiosResponse} from "axios";
import {
  SetStateAction,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  useState,
  FC,
} from "react";

import MessageSenderType from "@/types/MessageSenderType";
import MessageType from "@/types/MessageType";
import Axios from "@/utils/axios";

interface IContext {
  selectedId: Number | null;
  getMessages: (
    receiver_class: string, 
    receiver_id: Number | string,
  ) => Promise<MessageType[]>;
  getRecentDMs: () => Promise<MessageSenderType[]>;
  sendMessage: (
    receiver_class: string, 
    receiver_id: Number, 
    body: string
  ) => Promise<AxiosResponse>;
  setSelectedId: Dispatch<SetStateAction<Number | null>>;
};

const MessageContext = createContext({} as IContext);
export const useMessages = () => useContext(MessageContext);

interface IProps {
  children: ReactNode | ReactNode[];
};

const MessagesProvider: FC<IProps> = ({children}) => {
  const {authData} = useAuth();
  const [selectedId, setSelectedId] = useState<Number | null>(null);
  
  const getRecentDMs = async() => {
    let {data: {data}} = await Axios(
      "users/recent", 
      { headers: authData }
    );
    return uniqueByKey(data, "email");
  };

  const getMessages = async (
    receiver_class: string, 
    receiver_id: Number | string,
  ) => {
    const {data: {data}} = await Axios(
      "messages", { 
        headers: authData,
        params: { 
          receiver_class, 
          receiver_id 
        }
      }
    );
    return data;
  }
  
  const sendMessage = async(
    receiver_class: string, 
    receiver_id: Number | string, 
    body: string
  ) => await Axios.post(
      "messages",
      { 
        receiver_id, 
        receiver_class, 
        body 
      },
      { headers: authData }
    );

  return (
    <MessageContext.Provider 
      value={{ 
        getRecentDMs,
        getMessages,
        sendMessage,
        selectedId, 
        setSelectedId
      }}
    >
      {children}
    </MessageContext.Provider>
  )
}

export default MessagesProvider
