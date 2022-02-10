import styled from 'styled-components'

export default({messages}) => (<>
  {messages && 
    messages.map((msg, index) => (
      <Message key={index}>
        <UserAvatar>
          <img src='./frog-boi.jpg' />
        </UserAvatar>
        <MessageContent>
          <Name>
            {msg.email}
            <Date>{msg.created_at}</Date>
          </Name>
          <span>{msg.body}</span>
        </MessageContent>
      </Message>
  ))}
</>)

const Message = styled.div`
  display: flex;
  padding: 8px 20px;
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
  span {
    font-size: 13px;
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97, 96, 97);
  }
`
