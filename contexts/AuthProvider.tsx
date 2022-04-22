import {createContext, useContext} from 'react'

import {API_PATH} from '../utils/constants'
import axios from '../utils/axios'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default ({children}) => {
  const register = async(email, pwd, pwdCofirm) => {
    await axios.post(API_PATH.REGISTER, {
      email: email, password: pwd, 
      password_confirmation: pwdConfirm
    })
  }

  const login = async(email, password) => {
    const {LOGIN} = API_PATH
    try {
      const {headers} = await axios.post(LOGIN, {email, password})
    } catch (err) { console.log(err) }
  }

  return (
    <AuthContext.Provider value={{login, register}}>
      {children}
    </AuthContext.Provider>
  )
}
