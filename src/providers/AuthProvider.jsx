import {createContext, useContext} from 'react';
import {axiosAPI} from '../utils/api';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default({children}) => {
  const storedToken = localStorage.getItem('slack-clone-token');
  const decodedToken = atob(storedToken || '');
  const auth = decodedToken && JSON.parse(decodedToken);

  const signup = async(email, pass, confirmPass) => 
    await axiosAPI.post('auth', {
      'email': email,
      'password': pass,
      'password_confirmation': confirmPass
    });

  const login = async(email, pass) => {
    const res = await axiosAPI.post(
      'auth/sign_in', 
      { 'email': email, 'password': pass })
    const token = JSON.stringify(res.headers)
    localStorage.setItem('slack-clone-token', btoa(token))
    return res
  };

  return (
    <AuthContext.Provider value={{auth, login, signup}}>
      {children}
    </AuthContext.Provider>
  )
}
