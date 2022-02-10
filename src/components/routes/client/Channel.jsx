import ChatInput from '../../components/stateful/ChatInput'
import SampleThread from '../../components/SampleThread'
import {useAuth} from '../../../contexts/AuthProvider'
import {useEffect, useState} from 'react'
import styled from 'styled-components'

const baseUrl= 'https://static.wikia.nocookie.net/theoffice/images/'
export default() => (
  <Channel>
    <Header>
      <h4>Dunder Mifflin</h4>
      <Button>
        <Image src={baseUrl+'6/67/Pam_Beesley.jpg'} />
        <Image src={baseUrl+'e/e9/Character_-_JimHalpert.png'} />
        <Image src={baseUrl+'0/0b/Angela_Martin.jpg'} />
        15
      </Button>
    </Header>
    <Search>
      <button>+ Add a bookmark</button>
    </Search>
    <Thread>
      <SampleThread/>
    </Thread>
    <div style={{marginTop: '0'}}>
      <ChatInput/>
    </div>
  </Channel>
)

const Channel = styled.div`
  display: flex;
  color: #D1D2D3;
  flex-direction: column;
`

const Header = styled.div`
  height: 50px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;
`

const Search = styled.div`
  height: 37px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;

  button {
    border: none;
    color: #A0A0A2;
    font-size: 12px;
    cursor: pointer;
    padding: 5px 5px;
    background: none;
    :hover {
      background-color: #232529;
      border-radius: 4px;
    }
  }
`

const Button = styled.button`
  display: flex;
  color: #A0A0A2;
  cursor: pointer;
  padding: 5px 5px;
  background: none;
  border-radius: 4px;
  align-items: center;
  border: 1px solid #34383E;
  :hover { background: #232529; }
`

const Image = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  border: 1px solid #000;
`

const Thread = styled.div`
  height: 70%;
  overflow: auto;
`
