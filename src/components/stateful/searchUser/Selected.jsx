import {useUsers} from '../../../contexts/UsersProvider'
import styled from 'styled-components'
import {CgClose} from 'react-icons/cg'

export default() => {
  const {
    getEmailById, 
    selectedId, setSelectedId
  } = useUsers()
  const handleClick = () => setSelectedId(null)

  return (
    <Selected>
      <Image src='./frog-boi.jpg'/>
      <p>{getEmailById(selectedId)}</p>
      <CgClose size={20} onClick={handleClick}/>
    </Selected>
  )
}

const Selected = styled.span`
  height: 26px;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  background: #1a2a34;
  p { font-weight: bold; }
  svg { 
    margin: 0 8px; 
    :hover { background: #23333B; }
  }
`

const Image = styled.img`
  height: 100%;
  overflow: hidden;
  margin-right: 8px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`
