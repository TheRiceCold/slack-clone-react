import {useAuth} from './AuthProvider'
import {axiosAPI} from './axiosAPI'
import {
  createContext, useContext,
  useState, useEffect,
} from 'react'

const MessageContext = createContext()
export const useMessages = () => 
  useContext(MessageContext)

export default({children}) => {
  const {auth} = useAuth()
  const [selectedId, setSelectedId] = useState(null)

  const getRecentDMs = async() => {
    try {
      let {data: {data}} = await axiosAPI('users/recent', {headers: auth})
      data = data.filter(
        (dm, index, self) =>
          index === self.findIndex(t =>  t.email === dm.email)
      )
      return data
    } catch(e) { console.error(e) }
  }

  const getMessages = async(type, id) => {
    try {
      const {data: {data}} = await axiosAPI('messages', 
        { headers: auth,
          params: {
            'receiver_class': type,
            'receiver_id': id
          }})
      return data
    } catch(e) { console.error(e) }
  }

  const sendMessage = async(type, id, message) => {
    try {
      await axiosAPI.post('messages', {
        'receiver_id': id,
        'receiver_class': type,
        'body': message
      }, {headers: auth})
    } catch(e) { console.error(e) }
  }

  return (
    <MessageContext.Provider 
      value={{ 
        getRecentDMs,
        getMessages, sendMessage,
        selectedId, setSelectedId
      }}
    >
      {children}
    </MessageContext.Provider>
  )
}

