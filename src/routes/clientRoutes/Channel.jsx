import {useChannels} from '../../contexts/ChannelsProvider'
import Conversations from '../../components/Conversations'
import {DEFAULT_USER_IMG} from '../../data/constants'
import UserAvatar from '../../components/UserAvatar'
import ChatInput from '../../components/ChatInput'
import {BsPinAngleFill} from 'react-icons/bs'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {HiPlus} from 'react-icons/hi'

export default() => {
  const {id} = useParams()
  const [channel, setChannel] = useState()
  const {getChannelDetails} = useChannels()
  const [members, setMembers] = useState(0)

  useEffect(() => {
    (async() => {
      const {
        name, channel_members : members
      } = await getChannelDetails(id)
      setMembers(members)
      setChannel(name)
    })()
  }, [id])

  return (
    <Channel>
      <HeaderTop>
        <h4>{channel}</h4>
        <MembersBtn>
          {members &&
            members.map((m, i) => {
              if (i === 3) return 
              return <UserAvatar key={i} size={22} src={DEFAULT_USER_IMG}/>
            })
          }
          <p>{members.length}</p>
        </MembersBtn>
      </HeaderTop>
      <HeaderBottom>
        <button>
          <BsPinAngleFill/>13 Pinned
        </button>
        <button>
          <HiPlus/>Add a bookmark
        </button>
      </HeaderBottom>
      <Conversations id={id} type='Channel'/>
    </Channel>
  )
}

const Channel = styled.div`
  display: flex;
  color: #D1D2D3;
  background: #1a1d21;
  flex-direction: column;
`

const HeaderTop = styled.div`
  height: 50px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;
`

const HeaderBottom = styled.div`
  height: 37px;
  display: flex;
  padding-left: 13px;
  background: #1A1D21;
  align-items: center;
  outline: 1px solid #35373B;

  button {
    border: none;
    display: flex;
    color: #A4A4A6;
    cursor: pointer;
    font-size: 13px;
    padding: 5px 5px;
    background: none;
    margin-right: 8px;
    align-items: center;
    :hover {
      background: #232529;
      border-radius: 4px;
    }
    svg { 
      margin-right: 4px; 
      transform: scaleX(-1);
    }
  }
`

const MembersBtn = styled.button`
  height: 28px;
  display: flex;
  cursor: pointer;
  padding: 5px 5px;
  background: none;
  border-radius: 4px;
  align-items: center;
  border: 1px solid #34383E;
  :hover { background: #232529; }
  p { 
    color: #A0A0A2;
    font-size: 13px;
    margin-left: 8px; 
    font-weight: bold;
  }
`
