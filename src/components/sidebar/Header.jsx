import {HiChevronDown, HiOutlinePencilAlt} from 'react-icons/hi'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default() => (
  <Header>
    <p>Avion School</p>
    <HiChevronDown/>
    <NewMessage to='new'>
      <HiOutlinePencilAlt size={18} color={'black'}/>
    </NewMessage> 
  </Header>
)

const Header = styled.div`
  min-height: 49px;
  display: flex;
  cursor: pointer;
  color: whitesmoke;
  padding-left: 16px;
  align-items: center;
  margin-bottom: 20px;
  outline: 1px solid #34383E;
  p {
    font-size: 18px;
    font-weight: 700;
  }
  :hover { 
    background: #313843;
  }
`

const NewMessage = styled(Link)`
  width: 32px;
  height: 32px;
  display: flex;
  cursor: pointer;
  background: #FFF;
  margin-left: auto;
  margin-right: 16px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`
