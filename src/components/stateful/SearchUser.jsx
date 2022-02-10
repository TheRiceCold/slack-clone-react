<<<<<<< HEAD:src/components/SearchUser.jsx
import {useUsers} from '../contexts/UsersProvider'
import {useEffect, useState, useRef} from 'react'
=======
import {getAllUsers} from '../../utils/api/user'
import {useEffect, useState} from 'react'
>>>>>>> 7b386eb1bb74171a23b339b8c8aa410399f517a7:src/components/stateful/SearchUser.jsx
import styled from 'styled-components'
import {CgClose} from 'react-icons/cg'

<<<<<<< HEAD:src/components/SearchUser.jsx
export default() => {
  const inputRef = useRef()
  const {
    users, getEmailById,
    selectedId, setSelectedId
  } = useUsers()
=======
export default({auth}) => {
  const [search, setSearch] = useState('')
  const [userList, setUserList] = useState([])
>>>>>>> 7b386eb1bb74171a23b339b8c8aa410399f517a7:src/components/stateful/SearchUser.jsx
  const [suggestions, setSuggestions] = useState([])

  const handleOnChange = () => {
    const input = inputRef.current.value
    let matches = []
    if (input.length > 0) {
      matches = users.filter(user => {
        const regex = new RegExp(`${input}`,'gi')
        return user.email.match(regex)
      })
    }
    setSuggestions(matches)
  }

  const handleClick = id => {
    setSelectedId(id)
    inputRef.current.value = ''
    inputRef.current.placeholder = ''
  }

<<<<<<< HEAD:src/components/SearchUser.jsx
  return (
    <>
      <Search>
        <label>To:</label>
        {selectedId && 
          <Selected>
            <Image src='./frog-boi.jpg'/>
            <p>{getEmailById(selectedId)}</p>
            <CgClose size={20} onClick={
              () => setSelectedId(null)
            }/>
          </Selected>
        } 
        <input
          ref={inputRef}
          onChange={handleOnChange}
          placeholder='#a-channel, @somebody, or somebody@example.com'
        />
      </Search>
      <Suggestions show={suggestions.length}>
        {suggestions.map((user, i) => (
          <Item key={i} onClick={
            () => handleClick(user.id)
          }>
            <img src='./frog-boi.jpg'/>
            <p>{user.email}</p>
          </Item>
        ))}
      </Suggestions>
    </>
  )  
}

=======
>>>>>>> 7b386eb1bb74171a23b339b8c8aa410399f517a7:src/components/stateful/SearchUser.jsx
const Search = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;
  label { margin-right: 8px; }
  input {
    height: 100%;
    width: 100%;
    color:#a4a4a6;
    font-size: 14px;
    margin-left: 8px;
    background: transparent;
    :focus { outline: 0; }
  }
`

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
  :hover { background: #1264A3; }
  img {
    height: 20px;
    margin-right: 8px;
    border-radius: 5px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`
