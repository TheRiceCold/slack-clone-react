import {useState,useEffect} from 'react'
import styled from 'styled-components'
import {
  getAllUsersChannels
} from '../../../utils/api/channels'
import ListItems from './ListItems'
import TabItems from './TabItems'
import Header from './Header'
import Huddle from './Huddle'

export default({user}) => {
  const [channels, setChannels] = useState([])
  const [channelOpen, setChannelOpen] = useState(false)

  useEffect(() => {
    (async() => {
      const res = await getAllUsersChannels(user.auth)
      setChannels(res.data)
    })()
  }, [])   

  return (
    <Sidebar>
      <Header/>
      <TabItems/>
      <ListItems label='Channels' list={channels}/>
      <ListItems label='Direct messages' list={channels}/>
      <Huddle active={channelOpen}/>
    </Sidebar>
  )
}

const Sidebar = styled.div`
  display: flex;
  color: #b0b2b4;
  background: #1D2229;
  flex-direction: column;
  outline: 1px solid #34383E;
`
