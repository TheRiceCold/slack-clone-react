import {axiosAPI} from '../utils/axiosAPI'
import {useAuth} from './AuthProvider'
import {
  createContext, useContext,
  useState, useEffect,
} from 'react'

const MessageContext = createContext()
export const useMessages = () => useContext(MessageContext)

export default({children}) => {
  const {user} = useAuth()
  const [recentDMs, setRecentDMs] = useState([])
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    (async() => {
      try {
        const {data: {data}} = await axiosAPI(
          'users/recent', {headers: user.auth})
        const uniqueByEmail = data.filter(
          (dm, index, self) =>
            index === self.findIndex(t =>  t.email === dm.email)
        )
        setRecentDMs(uniqueByEmail)
      } catch(e) { console.error(e) }
    })()
  }, [JSON.stringify(recentDMs)])   

  const getMessages = async(receiversId) => {
    try {
      const url = 'messages?receiver_class=User&receiver_id='
      const {data} = await axiosAPI(
        url+receiversId,
        {headers: user.auth}
      )
      return data
    } catch(e) {
      console.error(e)
      return null
    }
  }

  const sendMessage = async(body) => {
    try {
      await axiosAPI.post('messages', body, {headers: user.auth})
    } catch(e) { console.error(e) }
  }

  return (
    <MessageContext.Provider 
      value={{ 
        recentDMs, setRecentDMs,
        getMessages, sendMessage,
        conversations, setConversations,
      }}
    >
      {children}
    </MessageContext.Provider>
  )
}
