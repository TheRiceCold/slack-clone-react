import {useChannels} from '../../contexts/ChannelsProvider'
import {useMessages} from '../../contexts/MessagesProvider'
import {DEFAULT_USER_IMG} from '../../data/constants'
import AddChannel from '../addChannel/AddChannel'
import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import UserAvatar from '../UserAvatar'
import {CgLock} from 'react-icons/cg'
import ListItems from './ListItems'
import TabItems from './TabItems'
import Header from './Header'
import Huddle from './Huddle'

export default() => {
  const navigate = useNavigate()
  const {getRecentDMs} = useMessages()
  const {getOwnedChannels} = useChannels()
  const [channels, setChannels] = useState([])
  const [recentDMs, setRecentDMs] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    (async() => {
      setRecentDMs(await getRecentDMs())
      setChannels(await getOwnedChannels())
    })()
  }, [])

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
  background: #1D2229;
  flex-direction: column;
  border: 1px solid #35373B;
`

const Content = styled.div`
  display: flex;
  color: #b0b2b4;
  overflow-x: hidden;
  flex-direction: column;
  ::-webkit-scrollbar { display: none; }
`
