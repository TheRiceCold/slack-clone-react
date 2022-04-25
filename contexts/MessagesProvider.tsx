import {FC, createContext, useState, useContext} from "react"

// import {uniqueByKey} from "@/utils/helpers"
import {useAuth} from "./AuthProvider"
import axios from "@/utils/axios"

const MessageContext = createContext({})
export const useMessages = () => useContext(MessageContext)

const MessagesProvider: FC = ({children}) => {
  // const {auth} = useAuth()
  const [selectedId, setSelectedId] = useState<Number | null>(null)
  
  // const getRecentDMs = async() => {
  //   let {data: {data}} = await axios(
  //     'users/recent', {headers: auth})
  //   return uniqueByKey(data, 'email')
  // }
  //
  // const getMessages = async(receiver_class, receiver_id) => {
  //   const {data: {data}} = await axios(
  //     "messages", { headers: auth, 
  //       params: { receiver_class, receiver_id }
  //     }
  //   )
  //   return data
  // }
  //
  // const sendMessage = async(receiver_class, receiver_id, body) => {
  //   await axios.post(
  //     "messages", 
  //     { receiver_id, receiver_class, body }, 
  //     { headers: auth }
  //   )
  // }

  return (
    <MessageContext.Provider 
      value={{ 
        // getRecentDMs,
        // getMessages, sendMessage,
        // selectedId, setSelectedId
      }}
    >
      {children}
    </MessageContext.Provider>
  )
}

export default MessagesProvider
