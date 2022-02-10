import {axiosAPI} from '../utils/axiosAPI'
import {useAuth} from './AuthProvider'
import {
  createContext, useContext,
  useState, useEffect,
} from 'react'

const ChannelsContext = createContext()
export const useChannels = () => useContext(ChannelsContext)

export default({children}) => {
  const {user: {auth}} = useAuth()
  const [channels, setChannels] = useState([])

  useEffect(() => {
    (async() => {
      try {
        const {data: {data}} = await axiosAPI('channel/owned', {headers: auth})
        setChannels(data)
      } catch(err) { console.log(err) }
    })()
  }, [JSON.stringify(channels)])   

  const addChannel = async(body) => {
    try {
      await axiosAPI.post('channels', body, {headers: auth})
    } catch(e) { console.error(e) }
  }

  const getAllUsersChannels = async() => {
    try {
      const {data} = await axiosAPI('channels', {headers: auth})
      return data
    } catch(e) {
      console.error(e)
    }
  }

  const getChannelDetails = async(id) => {
    try {
      const {data} = await axiosAPI('channels/'+id, {headers: auth})
      return data
    } catch(e) { console.error(e)  }
  }

  const addMemberToChannel = async(body) => {
    try {
      await axiosAPI.post('channel/add_member', body, {headers: auth})
    } catch(e) { console.error(e) }
  }

  return (
    <ChannelsContext.Provider value={{channels, setChannels}}>
      {children}
    </ChannelsContext.Provider>
  )
}
