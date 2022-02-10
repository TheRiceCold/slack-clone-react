import {useMessages} from '../../../contexts/MessagesProvider'
import Conversations from '../../stateless/Conversations'
import {useAuth} from '../../../contexts/AuthProvider'
import ChatInput from '../../stateful/ChatInput'
import {useEffect, useState} from 'react'
import {BiLockAlt} from 'react-icons/bi'
import styled from 'styled-components'

export default() => {
  const {user} = useAuth()
  const {
    conversations, setConversations,
    getMessages
  } = useMessages()

  useEffect(() => {
    (async() => {
      const {data} = await getMessages('3') 
      setConversations(data)
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
      <Conversations/>
      <ChatInput/>
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
