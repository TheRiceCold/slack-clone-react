import {useAuth} from './AuthProvider'
import {axiosAPI} from './axiosAPI'
import {
  createContext, useContext, 
  useEffect, useState
} from 'react'

const UserContext = createContext()
export const useUsers = () => useContext(UserContext)

export default({children}) => {
  const [users, setUsers] = useState([])
  const {auth} = useAuth()

  const getAllUsers = async() => {
    try {
      const {data:{data}} = await axiosAPI('users', {headers: auth})
      return data
    } catch(e) { console.error(e.response) }
  }

  useEffect(() => getAllUsers()
    .then(data => setUsers(data)), [])

  const getEmailById = id => {
    const foundUser = users.find(usr => usr.id === id)
    return foundUser.email
  }

  return (
    <UserContext.Provider value={{ 
      users, setUsers,
      getEmailById, getAllUsers
    }}>
      {children}
    </UserContext.Provider>
  )
}

