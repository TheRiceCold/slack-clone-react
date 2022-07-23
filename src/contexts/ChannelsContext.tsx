import {useAuth} from "./AuthContext";
import {AxiosResponse} from "axios";
import {
  createContext,
  useContext,
  ReactNode,
  Context,
  FC,
} from "react";

import ChannelDetailsType from "@/types/ChannelDetailsType";
import ChannelType from "@/types/ChannelType";
import Axios from "@/utils/axios";

interface IContext {
  getOwnedChannels: () => Promise<ChannelType[]>;
  getAllUsersChannels: () => Promise<ChannelType[]>;
  getChannelDetails: (id: Number) => Promise<ChannelDetailsType>;
  addMemberToChannel: (body: string) => Promise<AxiosResponse>;
  createChannel: (
    name: string, 
    user_ids: Number[]
  ) => Promise<AxiosResponse>;
}

const ChannelsContext = createContext({} as IContext);
export const useChannels = () => useContext(ChannelsContext);

interface IProps {
  children: ReactNode | ReactNode[];
};

const ChannelsProvider: FC<IProps> = ({ children }) => {
  const { authData } = useAuth();

  const createChannel = async(name: string, user_ids: Number[]) => 
    await Axios.post(
      "channels", 
      { name, user_ids }, 
      { headers: authData }
    );
  
  const getOwnedChannels = async() => {
    const {data: {data}} = await Axios(
      "channel/owned", 
      { headers: authData }
    );
    return data
  }

  const getAllUsersChannels = async() => {
    const {data} = await Axios(
      "channels", 
      { headers: authData }
    );
    return data;
  }

  const getChannelDetails = async (id: Number) => {
    const {data:{data}} = await Axios(
      "channels/"+id, 
      { headers: authData }
    );
    return data;
  };

  const addMemberToChannel = async (body: string) =>
    await Axios.post(
      "channel/add_member", 
      body, 
      { headers: authData }
    );

  return (
    <ChannelsContext.Provider value={{ 
      createChannel,
      getOwnedChannels,
      getChannelDetails,
      addMemberToChannel,
      getAllUsersChannels
    }}>
      {children}
    </ChannelsContext.Provider>
  );
}

export default ChannelsProvider;
