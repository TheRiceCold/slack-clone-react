import io from 'socket.io-client'
import {
  createContext, useContext, 
  useEffect, useState
} from 'react'

const SocketContext = createContext()
export const useSocket = () => useContext(SocketContext)

export const SocketProvider = ({id, children}) => {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const host = process.env.REACT_APP_HOST
    const newSocket = io(host, { query: {id} })
    setSocket(newSocket)
    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>
    </SocketContext.Provider>
  )
}

