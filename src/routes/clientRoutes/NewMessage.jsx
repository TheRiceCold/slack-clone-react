import {useMessages} from '../../contexts/MessagesProvider'
import Conversations from '../../components/Conversations'
import SearchUser from '../../components/SearchUser'
import ChatInput from '../../components/ChatInput'
import styled from 'styled-components'
import {useState} from 'react'

export default() => {
  const [message, setMessage] = useState('')
  const {
    sendMessage,
    setSelectedId,
    selectedId : id,
  } = useMessages()

  const route = id ? '../user/'+id: ''

  const handleClick = e => {
    if (id) {
      setMessage('')
      setSelectedId(null)
      sendMessage('User', id, message)
    }
    else alert('Select a receiver')
  }

  return (
    <Container>
      <Heading>New message</Heading>
      <SearchUser/>
      {id && <Conversations id={id} type='User'/>}  
      <ChatInput
        type='new'
        route={route}
        input={message}
        setInput={setMessage}
        handleClick={handleClick}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  color: #D1D2D3;
  align-items: center;
  flex-direction: column;
`

const Heading = styled.h4`
  width: 100%;
  height: 49px;
  line-height: 49px;
  padding-left: 20px;
  background: #1A1D21;
  outline: 1px solid #35373B;
`

