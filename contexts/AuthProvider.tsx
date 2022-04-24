import {createContext, useContext} from "react"
import {isAxiosError} from "axios"
import AxiosResponse from "axios"

import {API_PATH} from "../utils/constants"
import axios from "../utils/axios"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default ({children}) => {
  const register = async(email:string, pwd:string, pwdCofirm:string): Promise<AxioResponse> => {
    try {
      const res = await axios.post(API_PATH.REGISTER, {
        email: email, password: pwd, 
        password_confirmation: pwdConfirm
      })
      console.log(res)
    } catch (err) {
      if (isAxiosError(err))
        console.log(err.message)
      else 
        console.log("unexpected error: ", err)
    }
  }

  const login = async(email: string, password:string): Promise<AxiosResponse> => {
    try { 
      return await axios.post("auth/sign_in", {email, password})
    } catch (err) {
      if (isAxiosError(err)) 
        console.log(err.message)
      else 
        console.log("unexpected error: ", err)
    }
  }

  return (
    <AuthContext.Provider value={{login, register}}>
      {children}
    </AuthContext.Provider>
  )
}
