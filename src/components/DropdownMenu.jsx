import {MdSignalCellular4Bar} from 'react-icons/md'
import {BiChevronRight} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
import {FaRegSmile} from 'react-icons/fa'
import styled from 'styled-components'

import {DEFAULT_USER_IMG} from '@/constants/constants'
import {useAuth} from '@/providers/AuthProvider'
import UserAvatar from '@/styled/UserAvatar'
  
// DropdownMenu Component
export default() => {
  const email = useAuth().auth.uid
  const navigate = useNavigate()

  return (
    <DropdownMenu>
      <Header>
        <UserAvatar 
          size={38}
          src={DEFAULT_USER_IMG}
        />
        <Details>
          <User>{email}</User>
          <UserPressence>
            <MdSignalCellular4Bar color={'#007a5a'}/>
            Active
          </UserPressence>
        </Details>
      </Header>
      <StatusBtn>
        <FaRegSmile size={20}/>
        Update your status
      </StatusBtn>
      <Content>
        <MenuItem>Set yourself as away</MenuItem>
        <MenuItem>
          <p>Pause notifications</p>
          <BiChevronRight/>
        </MenuItem>
      </Content>
      <Content>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </Content>
      <Footer>
        <MenuItem onClick={() => localStorage.removeItem('user') }>Sign out of Avion School</MenuItem>
      </Footer>  
    </DropdownMenu>
  )
}


// Styled Components
const DropdownMenu = styled.div`
  top: 34px;
  right: 16px;
  width: 300px;
  display: flex; 
  cursor: default;
  padding: 10px 0;
  border-radius: 8px;
  position: absolute;
  align-items: center;
  background: #222529;
  flex-direction: column;
  border: 1px solid #333639;
`
const Header = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  padding: 10px 1rem 16px;
`

const Content = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #333639;
`

const Footer = styled.div`
  padding-top: 8px;
`

const Details = styled.div`
  display: flex;
  padding-left: 10px;
  flex-direction: column;
`

const User = styled.div`
  color: lightgray;
  font-weight: bold;
`

const UserPressence = styled.span`
  display: flex;
  color: #b8b9ba;
  font-size: 13px;
  align-items: center;
  svg { margin-right: 4px; }
`

const StatusBtn = styled.button`
  width: 85%;
  padding: 7px;
  height: 35px;
  display: flex;
  color: #d1d2d3;
  cursor: pointer;
  font-size: 15px;
  border-radius: 4px;
  background: #1b1d21;
  border: 1px solid #333639;
  :hover { border: 1px solid #c1c2c3; }
  svg { margin-right: 16px; }
`

const MenuItem = styled.button`
  width: 300px;
  height: 30px;
  display: flex;
  color: #d1d2d3;
  padding: 0 24px;
  cursor: pointer;
  font-size: 15px;
  background: none;
  align-items: center;
  :hover { 
    color: #fff;
    background: #1264a3;
  }
  p { 
    flex: 1 1 auto;
    text-align: left;
  }
`
