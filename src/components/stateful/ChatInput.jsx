<<<<<<< HEAD:src/components/stateful/ChatInput.jsx
import {sendMessage} from '../../utils/api/messages'
=======
import {useMessages} from '../../contexts/MessagesProvider'
import {useUsers} from '../../contexts/UsersProvider'
import {useAuth} from '../../contexts/AuthProvider'
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948:src/components/ChatInput.jsx
import {HiPaperAirplane} from 'react-icons/hi'
import styled from 'styled-components'
import {useRef} from 'react'

<<<<<<< HEAD:src/components/stateful/ChatInput.jsx
export default({auth}) => {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')
=======
export default() => {
  const {user} = useAuth()
  const inputRef = useRef(null)
  const {selectedId} = useUsers()
  const {sendMessage} = useMessages()
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948:src/components/ChatInput.jsx

  const handleClick = () => {
    let input = inputRef.current.value
    sendMessage({
      'receiver_id': selectedId,
      'receiver_class': 'User',
      'body': input
    })
    input = ''
  }

  return (
    <ChatInput>
      <Container>
        <input 
          type='text' 
          ref={inputRef}
          placeholder='Message here...'
        />
        <button onClick={handleClick}>
          <HiPaperAirplane size={18} color='white'/>
        </button>
      </Container> 
    </ChatInput>
  )
}

const ChatInput= styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: auto;
  padding-bottom: 24px;
`

const Container = styled.div`
  height: 42px;
  display: flex;
  border-radius: 4px;
  padding-left: 10px;
  align-items: center;
  border: 1px solid #8D8D8E;

  input {
    flex: 1;
    border: none;
    font-size: 13px;
    color: whitesmoke;
    background: transparent;
    &:focus { outline: none; }
    &::placeholder { color: #FFF; }
  }

  button {
    width: 32px;
    border: none;
    display: flex;
    cursor: pointer;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    background: transparent;
    transform: rotate(90deg);
  }
`
