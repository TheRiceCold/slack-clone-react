import {useUsers} from '../../../contexts/UsersProvider'
import styled from 'styled-components'

export default({inputRef, list}) => {
  const {setSelectedId} = useUsers()

  const handleClick = id => {
    setSelectedId(id)
    inputRef.current.value = ''
    inputRef.current.placeholder = ''
  }

  return (
    <Suggestions show={list.length}>
      {list.map((user, i) => (
        <Item key={i} onClick={() => handleClick(user.id)}>
          <Image src='./frog-boi.jpg'/>
          <p>{user.email}</p>
        </Item>
      ))}
    </Suggestions>
  )
}

const Suggestions = styled.div`
  width: 98%;
  font-size: 15px;
  max-height: 240px;
  margin-top: -10px;
  overflow-y: scroll;
  border-radius: 8px;
  background: #222529;
  padding: 1em 0 1em 0;
  border: 1px solid #323337;
  display: ${({ show }) => !show && 'none'};
`

const Item = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: .5em 0 .5em 20px;
  p { font-weight: bold; }
  &:hover { background: #1264A3; }
`

const Image = styled.img`
  height: 20px;
  margin-right: 8px;
  border-radius: 5px;
  background-size: 100%;
  background-repeat: no-repeat;
`
