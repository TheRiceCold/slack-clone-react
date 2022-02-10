import Thread from '../../components/stateless/Conversation'
import ChatInput from '../../components/stateful/ChatInput'
import {getMessages} from '../../utils/api/messages'
import {useEffect, useState} from 'react'
import {BiLockAlt} from 'react-icons/bi'
import styled from 'styled-components'

export default({user}) => {
  const [channel, setChannel] = useState()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    (async() => {
      const {data} = await getMessages(user.auth, '3') 
      setMessages(data)
    })()
  }, [])

  return (
    <Container>
      <Header>
        <BiLockAlt/>
        <ChannelName>
          batch15
        </ChannelName>
      </Header>
      <Thread messages={messages}/>
      <ChatInput auth={user.auth}/>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`

const Header = styled.div`
  height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`

const ChannelName = styled.div`
  font-weight: 700;
  margin-left: 8px;
`
