import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {CgLock} from 'react-icons/cg'
import {useQuery} from 'react-query'

import {useChannels} from '@/providers/ChannelsProvider'
import {useMessages} from '@/providers/MessagesProvider'
import {DEFAULT_USER_IMG} from '@/constants/constants'

import AddChannel from '../addChannel/AddChannel'
import UserAvatar from '@/styled/UserAvatar'
import ListItems from './ListItems'
import TabItems from './TabItems'
import Header from './Header'
import Huddle from './Huddle'

export default() => {
  const navigate = useNavigate()
  const {getRecentDMs} = useMessages()
  const {getOwnedChannels} = useChannels()
  const [showModal, setShowModal] = useState(false)

  const { data: recentDMs } = useQuery('recentDMs', getRecentDMs)
  const { data: channels } = useQuery('channels', getOwnedChannels)

  return (
    <Sidebar>
      <Header/>
      <Content>
        <TabItems/>
        <ListItems 
          path='channel'
          itemKey='name'
          list={channels}
          label='Channels' 
          addGeneral={true}
          itemImg={<CgLock/>}
          addClick={() => setShowModal(true)}
        />
        <ListItems 
          path='user'
          itemKey='email'
          slackbot={true}
          list={recentDMs}
          label='Direct messages' 
          addClick={() => navigate('new')}
          itemImg={<UserAvatar size={20} src={DEFAULT_USER_IMG}/>}
        />
      </Content>
      <Huddle/>
      <AddChannel 
        setShow={setShowModal}
        show={showModal}
      />
    </Sidebar>
  )
}

const Sidebar = styled.div`
  display: flex;
  min-height: 100vh;
  background: #1d2229;
  flex-direction: column;
  border: 1px solid #35373b;
`

const Content = styled.div`
  display: flex;
  color: #b0b2b4;
  overflow-x: hidden;
  flex-direction: column;
  ::-webkit-scrollbar { display: none; }
`
