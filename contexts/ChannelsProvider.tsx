import {FC, Context, createContext, useContext} from "react"
import {AxiosResponse} from "axios"

import {useAuth} from './AuthProvider'
import axios from '@/utils/axios'

interface IChannels {
  // createChannel: (name: string, user_ids: Number[]) => Promise<AxiosResponse>
  // getOwnedChannels: () => Promise<AxiosResponse>
  // getAllUsersChannels: () => Promise<AxiosResponse>
  // getChannelDetails: (id: Number) => Promise<AxiosResponse>
  // addMemberToChannel: (body: string) => Promise<AxiosResponse>
}

const ChannelsContext = createContext({})
export const useChannels = () => useContext(ChannelsContext) as IChannels

const ChannelsProvider: FC = ({children}) => {
  // const {auth} = useAuth()

  // const createChannel = async(name, user_ids) => 
  //   await axios.post("channels", {name, user_ids}, {headers: auth})
  //
  // const getOwnedChannels = async() => {
  //   const {data: {data}} = await axios(
  //     "channel/owned", {headers: auth}
  //   )
  //   return data
  // }

  // const getAllUsersChannels = async() => {
  //   const {data} = await axios("channels", {headers: auth})
  //   return data
  // }

  // const getChannelDetails = async id => {
  //   const {data:{data}} = await axios("channels/"+id, {headers: auth})
  //   return data
  // }

  // const addMemberToChannel = async body => 
  //   await axios.post("channel/add_member", body, {headers: auth})

  return (
    <ChannelsContext.Provider value={{ 
      // createChannel,
      // getOwnedChannels,
      // getChannelDetails,
      // addMemberToChannel,
      // getAllUsersChannels
    }}>
      {children}
    </ChannelsContext.Provider>
  )
}

export default ChannelsProvider
