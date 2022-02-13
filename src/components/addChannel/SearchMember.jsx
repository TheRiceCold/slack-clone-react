import {DEFAULT_USER_IMG} from '../../data/constants'
import {useUsers} from '../../contexts/UsersProvider'
import styled from 'styled-components'
import UserAvatar from '../UserAvatar'
import {useState} from 'react'
import {
  uniqueArray, findObjByKey
} from '../../utils/helpers'

export default({setSelected}) => {
  const {users} = useUsers()
  const [input, setInput]= useState('')
  const [suggestions, setSuggestions] = useState([])

  const handleOnChange = e => {
    setInput(e.target.value)
    let matches = input.length > 0
      ? findObjByKey(users, 'email', input)
        : []
    setSuggestions(matches)
  }

  return (
    <>
      <Input
        onChange={handleOnChange}
        placeholder='somebody@example.com'
      />
      <Suggestions show={suggestions.length}>
        {suggestions.map((user, i) => (
          <Item key={i} onClick={
            () => setSelected(current => uniqueArray([...current,user.id]))
          }>
            <UserAvatar src={DEFAULT_USER_IMG}/>
            <span>{user.email}</span>
          </Item>
        ))}
      </Suggestions>
    </>
  )  
}

const Input = styled.input`
  width: 100%;
  color: #d1d2d3;
  padding: 10px 10px;
  border-radius: 4px;
  background: #1A1D21;
  border: 1px solid #8d8d8e;
  :focus { outline: none; }
  :placeholder { color: #999b9d; }
`

const Suggestions = styled.div`
  width: 100%;
  font-size: 15px;
  max-height: 240px;
  overflow-y: scroll;
  border-radius: 8px;
  background: #222529;
  padding: 1em 0 1em 0;
  border: 1px solid #323337;
  display: ${({ show }) => !show && 'none'};
`

const Item = styled.div`
  height: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: .5em 0 .5em 20px;
  span { font-weight: bold; }
  :hover { background: #1264A3; }
  img {
    height: 20px;
    margin-right: 8px;
  }
`

