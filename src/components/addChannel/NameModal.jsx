import {CgClose} from 'react-icons/cg'
import styled from 'styled-components'

import {Modal, Header} from './style'

export default(props) => {
  const {
    onClose, 
    openNext, isOpenNext,
    channelName, setChannelName
  } = props

  const handleClick = () => { 
    if (!channelName || channelName.length < 3 || channelName.length > 15) {
      alert('Name should be within 3-15 characters long')  
    } else isOpenNext(true)
  }

  return (<>
    {!openNext &&
      <Modal onClick={e => e.stopPropagation()}>
        <Header>
          <h2>Create a Channel</h2>
          <CgClose size={20} onClick={onClose}/>
        </Header>
        <Body>
          <p>
            Channels are where your team communicates. They're best when
            organized around a topic - #marketing, for example.
          </p>
          <ModalLabel>Name</ModalLabel>
          <ModalName>
            <span>#</span>
            <NameInput 
              placeholder='e.g. plan-budget'
              onChange={e => setChannelName(e.target.value)}
            />    
          </ModalName>
        </Body>
        <button onClick={handleClick}>Next</button>
      </Modal>
    }</>)
}

const Body = styled.div`
  padding-top: 20px;
  p {
    color: #b0b2b4;
    font-size: 14px;
  }
  small {
    color: gray;
    font-size: 13px;
  }
`

const ModalLabel = styled.h4`
  margin-bottom: 10px;
  margin-top: 30px;
  color: #d1d2d3;
` 

const ModalName = styled.div`
  display: flex;
  align-items: center;
  span {
    width: 8px;
    color: gray;
    height: 37px;
    font-size: 14px;
    padding: 10px 10px;
    background: #1a1d21;
    border: 1px solid gray;
    border-radius: 4px 0 0 4px;
    border-right-style: none;
  }
` 

const NameInput = styled.input`
  width: 100%;
  color: #d1d2d3;
  padding: 10px 10px;
  background: #1a1d21;
  border: 1px solid #8d8d8e;
  border-radius: 0 4px 4px 0;
  border-left-style: none;
  :focus { outline: none; }
  :placeholder { color: #999b9d; }
`

