import {RiArrowRightSFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {HiPlus} from 'react-icons/hi'
import {useState} from 'react'

import {SLACKBOT_IMG} from '@/constants/constants'
import UserAvatar from '@/styled/UserAvatar'

// ListItems Component 
export default(props) => {
  const {
    addClick, 
    itemKey, itemImg,
    label, list, path,
    addGeneral, slackbot } = props

  const [isRotate, setIsRotate] = useState(false)
  const [showOptions, isShowOptions] = useState(false)

  return (
    <Container>
      <Tab 
        isRotate={isRotate} 
        showOptions={showOptions}
        onMouseEnter={() => isShowOptions(true)}
        onMouseLeave={() => isShowOptions(false)}
      >
        <Draggable>
          <Button onClick={() => setIsRotate(!isRotate)}>
            <RiArrowRightSFill size={20}/>
          </Button>
          <p styled={{marginLeft: '8px'}}>{label}</p>
        </Draggable>
        <div>
          <Button>
            <FiMoreVertical size={18}/>
          </Button>
          <Button onClick={addClick}>
            <HiPlus size={18}/>
          </Button>
        </div>
      </Tab>
      <List isRotate={isRotate}>
        {addGeneral && 
          <ListItem to='channel/general'>
            # general
          </ListItem>
        }
        {slackbot && 
          <ListItem to=''>
            <UserAvatar size={20} src={SLACKBOT_IMG}/>
            <p>Slackbot</p>
          </ListItem>
        }
        {list?.map((item, i) => (
          <ListItem key={i} to={path+'/'+item.id}>
            {itemImg}
            <p>{item[itemKey]}</p>
          </ListItem> 
        ))}
      </List>
    </Container>
  )
}


// Styled Components
const Container = styled.div`
  margin-top: 10px;
`

const Draggable = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.button`
  width: 26px;
  height: 26px;
  padding: 3px;
  border-radius: 4px;
  :hover { background: #34393F; }
  svg { color: #b0b2b4; }
`

const List = styled.div`
  display: ${({isRotate}) => !isRotate && 'none' }
`

const ListItem = styled(NavLink)`
  height: 28px;
  display: flex;
  color: #b0b2b4;
  font-size: 15px;
  cursor: pointer;
  padding-left: 36px;
  align-items: center;
  text-decoration: none;
  :hover { background: #313843; }
  [class*="active"] {
    color: #fff;
    background: #537aa6;
  }
  p { margin-left: 8px; } 
`

const Tab = styled.div`
  height: 28px;
  display: flex;
  cursor: pointer;
  font-size: 15px;
  padding-left: 16px;
  padding-right: 12px;
  align-items: center;
  justify-content: space-between;
  button { 
    cursor: pointer;
    background: none; 
  }
  div:first-child svg {
    transition: transform .1s ease;
    transform: rotate(${
      ({ isRotate }) => isRotate ? '90deg' : '0deg'
    });
  }
  div:last-child {
    transition: opacity .1s ease-out;
    opacity: ${({ showOptions }) => showOptions ? '1' : '0'}
  }
`
