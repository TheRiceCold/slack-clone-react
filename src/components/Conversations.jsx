import {useMessages} from '../contexts/MessagesProvider'
import {DEFAULT_USER_IMG} from '../data/constants'
import UserAvatar from '../components/UserAvatar'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'

export default({id, type}) => {
  const [sent, isSent] = useState(0)
  const [message, setMessage] = useState('')
  const {sendMessage, getMessages} = useMessages()
  const [conversations, setConversations] = useState([])
  console.log(conversations)

  useEffect(() => {
    (async() => {
      const data = await getMessages(type, id) 
      setConversations(data)
    })()
  }, [id, sent])

  const handleClick = () => {
    sendMessage(type, id, message)
    isSent(prev => prev+1)
    setMessage('')
  }

  return (<>
    <Conversations>{
      conversations && conversations.map(
        ({sender: {email}, created_at, body}, i) => (
          <Message key={i}>
            <UserAvatar size={36} src={DEFAULT_USER_IMG}/>
            <MessageContent>
              <User>
                <Email>{email}</Email>
                <Date>
                  {created_at.substring(0, 10)}
                </Date>
              </User>
              <p>{body}</p>
            </MessageContent>
          </Message>
        ))
    }</Conversations>
    <ChatInput
      input={message}
      setInput={setMessage}
      handleClick={handleClick}
      />
  </>)
}

const Conversations = styled.div`
  height: 75vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
`

const Message = styled.div`
  height: 52px;
  display: flex;
  padding: 8px 20px;
  align-items: center;
  :hover { background: #222529; }
`

const MessageContent = styled.div`
  display: flex;
  color: #d1d2d3;
  margin-left: 8px;
  flex-direction: column;
`

const User = styled.span`
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  margin-right: 8px;
`

const Email = styled.span`
  :hover {
    text-decoration: underline;
  }
`

const Date = styled.span`
  color: #909193;
  font-size: 12px;
  margin-left: 8px;
  font-weight: 400;
  :hover {
    text-decoration: underline;
  }
`

