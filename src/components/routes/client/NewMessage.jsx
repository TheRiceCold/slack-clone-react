import SearchUser from '../../stateful/searchUser/SearchUser'
import ChatInput from '../../stateful/ChatInput'
import styled from 'styled-components'
import {useState} from 'react'

export default() => {
  return (
    <Container>
      <Heading>New message</Heading>
      <SearchUser/>
      <ChatInput/>
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
