import {axiosAPI} from '../utils/axiosAPI'
import {useAuth} from './AuthProvider'
import {
  createContext, useContext, 
  useEffect, useState
} from 'react'

const UserContext = createContext()
export const useUsers = () => useContext(UserContext)

export default({children}) => {
  const {user} = useAuth()
  const [users, setUsers] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    (async(auth) => {
      try {
        const {data: {data}} = await axiosAPI('users', {headers: user.auth})
        setUsers(data)
      } catch(err) {
        console.error(err)
        setUsers(users)
      }
    })()
  }, [])

  const getEmailById = id => {
    const foundUser = users.find(usr => usr.id === id)
    return foundUser.email
  }

  return (
    <UserContext.Provider value={{
      users, setUsers, getEmailById,
      selectedId, setSelectedId
    }}>
      {children}
    </UserContext.Provider>
  )
}
