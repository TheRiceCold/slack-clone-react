import {useAuth} from "./AuthContext";
import {
  SetStateAction,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  useState, 
  FC, 
} from "react";

import UserType from "@/types/UserType";
import Axios from "@/utils/axios";

interface IContext {
  getUsers: () => Promise<UserType[]>;
};

const UsersContext = createContext({} as IContext);
export const useUsers = () => useContext(UsersContext);

interface IProps {
  children: ReactNode | ReactNode[];
};

const UsersProvider: FC<IProps> = ({children}) => {
  const {authData} = useAuth();
  
  const getUsers = async() => {
    const { data: {data} } = await Axios(
      "users", 
      {headers: authData}
    );
    return data as UserType[];
  }

  return (
    <UsersContext.Provider value={{ getUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
