import {createContext, useContext} from 'react'

import {API_PATH} from '../utils/constants'
import {useAuth} from './AuthProvider'
import axios from '../utils/axios'

const ChannelsContext = createContext()
export const useChannels = () => useContext(ChannelsContext)

export default ({children}) => {
  const {auth} = useAuth()

  const createChannel = async(name, user_ids) => {
    await axios.post(
      API_PATH.CHANNELS, 
      {name, user_ids}, 
      {headers: auth}
    )
  }

  const getOwnedChannels = async() => {
    const {data: {data}} = await axios(
      API_PATH.CHANNELS_OWNED, 
      {headers: auth}
    )
    return data
  }

  const getAllUsersChannels = async() => {
    const {data} = await axios(
      API_PATH.CHANNELS, 
      {headers: auth}
    )
    return data
  }

  const getChannelDetails = async id => {
    const {data:{data}} = await axios(
      API_PATH.CHANNELS+'/'+id, 
      {headers: auth}
    )
    return data
  }

  const addMemberToChannel = async body => {
    await axios.post(
      API_PATH.CHANNELS_ADD_MEMBER, 
      body, {headers: auth}
    )
  }

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
  )
}
