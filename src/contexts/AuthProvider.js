import {axiosAPI} from '../utils/axiosAPI'
import {
  createContext, useContext,
  useState, useLayoutEffect,
} from 'react'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default({children}) => {
  const [user, setUser] = useState(null)

  useLayoutEffect(() => {
    const decodedToken = atob(localStorage.user || '')
    const storedUser = decodedToken && JSON.parse(decodedToken)
    setUser(storedUser)
  }, [])

  const signUp = async(body) => {
    try { await axiosAPI.post('auth', body) } 
    catch(e) { console.error(e) }
  }

  const login = async(body) => {
    try {
      const {
        data: {data}, headers: auth
      } = await axiosAPI.post('auth/sign_in', body)
      return {data, auth}
    } catch(e) {
      console.error(e)
      return null
    }
  }

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ 
      user, setUser, 
      signUp, login,
      signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
