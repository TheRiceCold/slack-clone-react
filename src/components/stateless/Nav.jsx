<<<<<<< HEAD:src/components/stateless/Nav.jsx
=======
import {useAuth} from '../../contexts/AuthProvider'
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948:src/components/Nav.jsx
import {MdHelpOutline} from 'react-icons/md'
import {CgSearch} from 'react-icons/cg'
import styled from 'styled-components'
import {BiTime} from 'react-icons/bi'
import {useState} from 'react'

<<<<<<< HEAD:src/components/stateless/Nav.jsx
export default({signOut}) => (
  <Nav>
    <Main>
      <BiTime size={22}/>
      <SearchBox>
        <input type='text' placeholder='Search Avion School' />
        <CgSearch size={18}/>
      </SearchBox>
    </Main>
    <UserContent>
      <MdHelpOutline size={22}/>
      <Image onClick={signOut}>
        <img src='https://i.imgur.com/6VBx3io.png' style={{width: '100%'}}/>
      </Image>
    </UserContent>
  </Nav>
)

=======
export default() => {
  const {signOut} = useAuth()

  return (
    <Nav>
      <Main>
        <BiTime size={22} style={{marginRight: '20px'}}/>
        <SearchBox>
          <input type='text' placeholder='Search Avion School' />
          <CgSearch size={18}/>
        </SearchBox>
      </Main>
      <UserContent>
        <MdHelpOutline size={22}/>
        <Image onClick={signOut}>
          <img src='./frog-boi.jpg'/>
        </Image>
      </UserContent>
    </Nav>
  )
}

>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948:src/components/Nav.jsx
const Nav = styled.div`
  color: #FFF;
  z-index: 10;
  display: flex;
  position: relative;
  align-items: center;
  background: #0B161E;
  outline: 1px solid #34383E;
<<<<<<< HEAD:src/components/stateless/Nav.jsx
  svg { 
    margin-right: 16px; 
    &:hover {
      cursor: pointer;
      border-radius: 5px;
      background: #34393F;
    }
=======
  justify-content: space-between;
  svg:hover {
    cursor: pointer;
    border-radius: 5px;
    background: #34393F;
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948:src/components/Nav.jsx
  }
`

const Main = styled.div`
  display: flex;
<<<<<<< HEAD:src/components/stateless/Nav.jsx
  margin-left: 16px;
  margin-right: 16px;
=======
  margin-left: 16%;
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948:src/components/Nav.jsx
`

const SearchBox = styled.div`
  width: 732px;
  display: flex;
  border-radius: 6px;
  position: relative;
  background: #3C454B;
  align-items: center;
  input {
    width: 96%;
    color: #FFF;
    border: none;
    padding-top: 4px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 4px;
    background: transparent;
    &:focus { outline: none; }
  }
`

const UserContent = styled.div`
  right: 0;
  display: flex;
  position: fixed;
  align-items: center;
  padding-right: 16px;
`

const Image = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-left: 16px;
<<<<<<< HEAD:src/components/stateless/Nav.jsx
  border-radius: 3px;
  border: 1px solid #FFF;
=======
  img { 
    width: 100%; 
    border-radius: 3px;
  }
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948:src/components/Nav.jsx
`
