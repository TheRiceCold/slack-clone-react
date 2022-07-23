import {useStorage} from "@/hooks/useStorage";
import {AxiosResponse} from "axios";
import {
  createContext, 
  useContext, 
  ReactNode,
  FC,
} from "react";

import AuthDataType from "@/types/AuthDataType";
import CryptoENC from "crypto-js/enc-utf8";
import Axios from "@/utils/axios";
import Crypto from "crypto-js";

interface IContext {
  isAuth: boolean,
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
  const key = "auth";
  const storage = useStorage();
  const secret = import.meta.env.VITE_SECRET;

  const storedAuth: string | null = storage.getItem(key);
  const decryptedAuthData: string | null = storedAuth && Crypto.AES.decrypt(storedAuth, secret).toString(CryptoENC);
  const authData = JSON.parse(decryptedAuthData ?? "{}");
  const isAuth = Object.keys(authData).length !== 0;

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
      const res = await Axios.post("auth/sign_in", { email, password });
      const authData = JSON.stringify(res.headers);
      
      storage.setItem(key, Crypto.AES.encrypt(authData, secret).toString());

      return res;
    } catch (error: any) {
      return error.response;
    }
  }

  return (
    <AuthContext.Provider value={{ 
      login, signup, 
      authData, isAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
