import {
  createContext, 
  useContext, 
  useEffect,
  useState
} from 'react'
import io from 'socket.io-client'

const SocketContext = createContext()

export const useSocket = () => useContext(SocketContext)

export const SocketProvider = ({id, children}) => {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const host = 'http://localhost:5000'
    const newSocket = io(host, { query: {id} })
    setSocket(newSocket)
    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>
    </SocketContext.Provider>
  )
}
