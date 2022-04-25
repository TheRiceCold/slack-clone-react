import {FC, createContext, useContext} from "react"
import {AxiosResponse} from "axios"

import axios from "../utils/axios"

interface IAuthContext {
  login: (email: string, password: string) => AxiosResponse
  register: (email: string, pwd: string, 
    password_confirmation: string) => AxiosResponse
}

const AuthContext = createContext({})
export const useAuth = () => useContext(AuthContext) as IAuthContext

const AuthProvider: FC = ({children}) => {
  const register = async(
    email: string, password: string, 
    password_confirmation: string) => {
    try {
      await axios.post("auth", {email, password, password_confirmation})
    } catch (err: any) {
      console.log(err.message)
      // console.log("unexpected error: ", err)
    }
  }

  const login = async(email: string, password: string) => {
    try { 
      return await axios.post("auth/sign_in", {email, password})
    } catch (err: any) {
      console.log(err.message)
      // console.log("unexpected error: ", err)
    }
  }

  return (
    <AuthContext.Provider value={{login, register}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
