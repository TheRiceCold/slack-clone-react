import {createContext, useState, useContext} from 'react'

import {useAuth} from './AuthProvider'
import {axiosAPI} from '../utils/api'

const ChannelsContext = createContext()
export const useChannels = () => useContext(ChannelsContext)

export default({children}) => {
  const {auth} = useAuth()

  const createChannel = async(name, userIds) => {
    try {
      const res = await axiosAPI.post('channels', {
        'name': name,
        'user_ids': userIds
      }, {headers: auth})
    } catch(e) { console.error(e) }
  }

  const getOwnedChannels = async() => {
    try {
      const {data: {data}} = await axiosAPI('channel/owned', {headers: auth})
      return data
    } catch(err) { console.log(err) }
  }

  const getAllUsersChannels = async() => {
    try {
      const {data} = await axiosAPI('channels', {headers: auth})
      return data
    } catch(e) { console.error(e) }
  }

  const getChannelDetails = async(id) => {
    try {
      const {data:{data}} = await axiosAPI('channels/'+id, {headers: auth})
      return data
    } catch(e) { console.error(e)  }
  }

  const addMemberToChannel = async(body) => {
    try {
      await axiosAPI.post('channel/add_member', body, {headers: auth})
    } catch(e) { console.error(e) }
  }

  return (
    <ChannelsContext.Provider value={{ 
      createChannel,
      getOwnedChannels,
      getChannelDetails,
      addMemberToChannel,
    }}>
      {children}
    </ChannelsContext.Provider>
  )
}
