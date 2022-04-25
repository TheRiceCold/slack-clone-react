import {FC, createContext, useState, useContext} from 'react'

import {UserType} from "@/types/clientTypes"
import {useAuth} from './AuthProvider'
import axios from '@/utils/axios'

const UsersContext = createContext({})
export const useUsers = () => useContext(UsersContext)

const UsersProvider: FC = ({children}) => {
  const [users, setUsers] = useState<UserType[]>([])

  // const {auth} = useAuth()
  //
  // const getAllUsers = async() => {
  //   const { data: {data} } = await axios(
  //     API_PATH.USERS, 
  //     { headers: auth }
  //   )
  //   return data
  // }
  //
  // const getEmailById = id => {
  //   const foundUser = users.find(usr => usr.id === id)
  //   return foundUser.email
  // }

  return (
    <UsersContext.Provider value={{ 
      // users, setUsers, getEmailById, getAllUsers
    }}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider
