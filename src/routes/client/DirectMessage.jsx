import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {BiLockAlt} from 'react-icons/bi'
import styled from 'styled-components'

import Conversations from '@/components/Conversations'
import {useUsers} from '@/providers/UsersProvider'

// DirectMessage Component
export default() => {
  const {id} = useParams()
  const {getAllUsers} = useUsers()
  const [email, setEmail] = useState('')

  useEffect(() => {
    (async() => {
      const users = await getAllUsers()
      const found = users.find(user => user.id+'' === id)
      setEmail(found.email)
    })()
  }, [id])

  return (
    <Container>
      <Header>
        <BiLockAlt/>
        <p>{email}</p>
      </Header>
      <Conversations id={id} type='User'/>
    </Container>
  )
}


// Styled Components
const Container = styled.div`
  display: grid;
  background: #1a1d21;
  grid-template-rows: 49px auto min-content;
`

const Header = styled.div`
  min-height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1a1d21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373b;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
  p {
    font-weight: 700;
    margin-left: 8px;
  }
`
