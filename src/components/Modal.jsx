import {CgClose} from 'react-icons/cg'
import styled from 'styled-components'
import {useState} from 'react'

export default({show, onClose})=> {
  const [name, setName] = useState('')

  const handleCreate = () => { 
    console.log(name)
    if (!name || name.length < 3 || name.length > 15) {
      alert('Name should be within 3-15 characters long')  
    } else {

    }
  }

  if (!show) return null

  return (
    <Overlay onClick={onClose}>
      <Container onClick={e => e.stopPropagation()}>
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
              onChange={e => setName(e.target.value)}
             />    
          </ModalName>
        </Body>
        <button onClick={handleCreate}>Next</button>
      </Container>
    </Overlay>
  )
}

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`

const Container = styled.div`
  width: 500px;
  padding: 30px;
  cursor: default;
  border-radius: 8px;
  background: #222529;
  border: 1px solid #8d8d8e;

  button {
    float: right;
    color: #d1d2d3;
    cursor: pointer;
    font-size: 15px;
    margin-top: 15px;
    font-weight: bold;
    border-radius: 4px;
    padding: 10px 15px;
    background: transparent;
    border: 1px solid #8d8d8e;
    &:hover {
      color: #222529;
      background: #D1D2D3;
    }
  }
`

const Header = styled.div`
  display: flex;
  color: #d1d2d3;
  align-items: center;
  justify-content: space-between;
  svg { cursor: pointer; }
`

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
    color: gray;
    height: 38px;
    padding: 10px 10px;
    border: 1px solid gray;
    border-radius: 4px 0 0 4px;
    border-right-style: none;
  }
` 

const NameInput = styled.input`
  width: 100%;
  color: #d1d2d3;
  padding: 10px 10px;
  background: transparent;
  border: 1px solid #8d8d8e;
  border-left-style: none;
  border-radius: 0 4px 4px 0;
  &:focus { outline: none; }
  &::placeholder { color: #999b9d; }
`
