import {FiMoreVertical} from 'react-icons/fi'
import {BsChatText} from 'react-icons/bs'
import {HiAtSymbol} from 'react-icons/hi'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export default() => (
  <>
    <ListItem to='threads'>
      <BsChatText size={18}/>
      <span>Threads</span>
    </ListItem>
    <ListItem to='activity'>
      <HiAtSymbol size={18}/>
      <span>Mentions & reactions</span>
    </ListItem>
    <MoreItem>
      <FiMoreVertical size={18}/>
      <span>More</span>
    </MoreItem>
  </>
)

const listItemStyle = `
  height: 28px;
  display: flex;
  font-size: 15px;
  cursor: pointer;
  padding-left: 19px;
  align-items: center;
  span { margin-left: 8px; } 
`
const ListItem = styled(NavLink)`
  ${listItemStyle}
  :hover { background: #313843; }
  text-decoration: none;
  color: #b0b2b4;
`
const MoreItem = styled.div`
  ${listItemStyle}
  :hover { color: whitesmoke; }
`
