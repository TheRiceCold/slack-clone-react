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
  users: UserType[];
  getEmailById: (id: Number) => string;
  getAllUsers: () => Promise<UserType[]>;
  setUsers: Dispatch<SetStateAction<UserType[]>>;
};

const UsersContext = createContext({} as IContext);
export const useUsers = () => useContext(UsersContext);

interface IProps {
  children: ReactNode | ReactNode[];
};

const UsersProvider: FC<IProps> = ({children}) => {
  const [users, setUsers] = useState<UserType[]>([]);

  const {authData} = useAuth();
  
  const getAllUsers = async() => {
    const { data: {data} } = await Axios(
      "users", 
      {headers: authData}
    );
    return data;
  }
  
  const getEmailById = (id: Number) => {
    const foundUser = users.find(
      (user: UserType) => user.id === id
    ) as UserType;
    return foundUser.email;
  }

  return (
    <UsersContext.Provider value={{ 
      users,
      setUsers, 
      getAllUsers,
      getEmailById, 
    }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
