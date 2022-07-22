import {useStorage} from "@/hooks/useStorage";
import {AxiosResponse} from "axios";
import {
  createContext, 
  useContext, 
  ReactNode,
  FC,
} from "react";

import AuthDataType from "@/types/AuthDataType";
import Axios from "@/utils/axios";

interface IContext {
  authData: AuthDataType,
  login: (
    email: string, 
    password: string
  ) => Promise<AxiosResponse>;
  signup: (
    email: string, 
    pwd: string, 
    password_confirmation: string
  ) => Promise<AxiosResponse>;
};

const AuthContext = createContext({} as IContext);
export const useAuth = () => useContext(AuthContext);

interface IProps {
  children: ReactNode | ReactNode[];
};

const AuthProvider: FC<IProps> = ({children}) => {
  const {getItem} = useStorage();
  let storedAuth: string | null = getItem("auth");
  const authData: AuthDataType = storedAuth && JSON.parse(storedAuth);

  const signup = async(
    email: string,
    password: string, 
    password_confirmation: string
  ) => {
    try {
      return await Axios.post(
        "auth", {
          email, 
          password, 
          password_confirmation
        }
      );
    } catch (err: any) {
      return err.message;
    }
  }

  const login = async(email: string, password: string) => {
    try { 
      return await Axios.post(
        "auth/sign_in", 
        { email, password }
      );
    } catch (err: any) {
      return err.message;
    }
  }

  return (
    <AuthContext.Provider value={{ login, signup, authData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
