import {useChannels} from '../../contexts/ChannelsProvider'
import {DEFAULT_USER_IMG} from '../../data/constants'
import {useUsers} from '../../contexts/UsersProvider'
import SearchMember from './SearchMember'
import {CgClose} from 'react-icons/cg'
import styled from 'styled-components'
import UserAvatar from '../UserAvatar'
import {Modal, Header} from './style'
import {useState} from 'react'

export default(props) => {
  const {getEmailById} = useUsers()
  const {createChannel} = useChannels()
  const [selected, setSelected] = useState([])
  const {openNext, channelName, onClose} = props

  return (<>
    {openNext &&
       <Modal onClick={e => e.stopPropagation()}>
        <Header>
          <h2>Add Members</h2>
          <CgClose size={20} onClick={onClose}/>
        </Header>
        <Content>
          <ChannelName># {channelName}</ChannelName>
          <SearchMember setSelected={setSelected}/>
          <h4>Users to be added:</h4>
          {selected && 
            selected.map((id, i) => (
              <Selected key={id}>
                <UserAvatar src={DEFAULT_USER_IMG}/>
                <p>{getEmailById(id)}</p>
                <CgClose size={18} onClick={() => {
                  const filtered = selected.filter(_id => _id !== id)
                  setSelected(filtered)
                }}/>
              </Selected>
            ))
          }
        </Content>
        <button onClick={() => {
          createChannel(channelName, selected)
          // location.reload()
        }}>{
          selected.length ? 'Create' : 'Skip for now'
        }</button>
      </Modal>
    }
  </>)
}

const Content = styled.div`
  display: flex;
  max-height: 60vh;
  padding-top: 10px;
  overflow-y: scroll;
  align-items: center;
  scrollbar-width: none;
  flex-direction: column;
  h4 {
    font-size: 14px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  :-webkit-scrollbar { display: none; }
`

const ChannelName = styled.div`
  width: 100%;
  color: #b0b2b4;
  font-size: 14px;
  padding-bottom: 30px;   
`

const Selected = styled.div`
  width: 80%;
  height: 26px;
  display: flex;
  cursor: pointer;
  margin-bottom: 4px;
  border-radius: 4px;
  align-items: center;
  :hover { background: #1a2a34; }
  p { font-size: 14px; }
  svg { 
    margin-left: auto; 
    :hover { background: #23333B; }
  }
  img { 
    height: 100%; 
    margin-right: 8px;
  }
`
