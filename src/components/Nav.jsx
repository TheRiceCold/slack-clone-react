import {DEFAULT_USER_IMG} from '../data/constants'
import {MdHelpOutline} from 'react-icons/md'
import DropdownMenu from './DropdownMenu'
import {CgSearch} from 'react-icons/cg'
import styled from 'styled-components'
import UserAvatar from './UserAvatar'
import {BiTime} from 'react-icons/bi'
import {useState} from 'react'

export default() => {
  const [open, setOpen] = useState()

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
          {open && <DropdownMenu/>}
          <UserAvatar 
            size={28} 
            src={DEFAULT_USER_IMG}
            onClick={() => setOpen(!open)}
          />  
      </UserContent>
    </Nav>
  )
}

const Nav = styled.div`
  color: #FFF;
  z-index: 10;
  display: flex;
  position: relative;
  align-items: center;
  background: #0B161E;
  outline: 1px solid #34383E;
  justify-content: space-between;
  svg:hover {
    cursor: pointer;
    border-radius: 5px;
    background: #34393F;
  }
`

const Main = styled.div`
  display: flex;
  margin-left: 16%;
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
    :focus { outline: none; }
  }
`

const UserContent = styled.div`
  right: 0;
  display: flex;
  position: fixed;
  align-items: center;
  padding-right: 16px;
  > img { margin-left: 8px; }
`
