import {useRef, useEffect, useState} from 'react'
import {HiPaperAirplane} from 'react-icons/hi'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {useUsers} from '@/providers/UsersProvider'

// ChatInput Components
export default(props) => {
  const {
    handleClick, 
    input, setInput,
    route, type } = props
  const [active, setActive] = useState(false)

  useEffect(() => setActive(!input), [input])

  const sendBtn = type === 'new' ? (
    <Link
      onClick={handleClick}
      to={route ? route : ''}
      active={active ? 0 : 1}
    >
      <HiPaperAirplane size={18} color='white'/>
    </Link>
  ) : (
    <button 
      onClick={handleClick} 
      active={active ? 0 : 1} 
    >
      <HiPaperAirplane size={18} color='white'/>
    </button>
  )

  return (
    <ChatInput>
      <Container>
        <input 
          type='text' 
          value={input}
          placeholder='Message here...'
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => {e.key === 'Enter' && handleClick()}}
        />
        {sendBtn}
      </Container> 
    </ChatInput>
  )
}


// Styled Components
const ChatInput= styled.div`
  width: 82vw;
  bottom: 24px;
  padding: 0 20px;
  position: fixed;
`

const Container = styled.div`
  height: 42px;
  display: flex;
  border-radius: 4px;
  padding-left: 10px;
  align-items: center;
  border: 1px solid #8d8d8e;
  background: #222529;

  input {
    flex: 1;
    border: none;
    font-size: 13px;
    background: none;
    color: whitesmoke;
    :focus { outline: none; }
    ::placeholder { color: #fff; }
  }

  a {
    width: 32px;
    border: none;
    display: flex;
    background: none;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    transform: rotate(90deg);
    svg { ${props => activeIcon(props)} }
  }

  button {
    width: 32px;
    border: none;
    display: flex;
    cursor: pointer;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    background: none;
    transform: rotate(90deg);
    svg { ${props => activeIcon(props)} }
  }
`

const activeIcon = props => {
  const active = props.children[1].props.active 
  return active ? 
  ` opacity: 1;
    pointer-events: auto;` : 
    ` opacity: .25;
      pointer-events: none;
    `
}
