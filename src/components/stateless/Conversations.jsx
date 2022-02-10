<<<<<<< HEAD:src/components/Conversations.jsx
import {useMessages} from '../contexts/MessagesProvider'
=======
import {useMessages} from '../../contexts/MessagesProvider'
>>>>>>> 7b386eb1bb74171a23b339b8c8aa410399f517a7:src/components/stateless/Conversations.jsx
import styled from 'styled-components'

export default() => {
  const {conversations} = useMessages()

  return(
    <>{
      conversations && conversations.map(
        ({email, created_at, body}, index) => (
          <Message key={index}>
            <UserAvatar>
              <img src='./frog-boi.jpg'/>
            </UserAvatar>
            <MessageContent>
              <Name>
                {email}
                <Date>
                  {created_at}
                </Date>
              </Name>
              <p>{body}</p>
            </MessageContent>
          </Message>
        ))
    }</>
  )
}

const Message = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
`

const UserAvatar = styled.div`
  width: 36px; 
  height: 36px;
  overflow: hidden;
  margin-right: 8px;
  border-radius: 2px;
  img { width: 100%; }
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  margin-right: 8px;
`

const Date = styled.span`
  font-size: 13px;
  margin-left: 8px;
  font-weight: 400;
  color: rgb(97, 96, 97);
`
