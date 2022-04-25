import {CgClose} from 'react-icons/cg'
import {FC, useState} from 'react'

import {useChannels} from '@/contexts/ChannelsProvider'
import {useUsers} from '@/contexts/UsersProvider'

import SearchMember from './SearchMember'

interface IProps {
  isOpenNext: boolean
  channelName: string
  onClose: () => void
}

const MembersModal: FC<IProps> = (props) => {
  // const {getEmailById} = useUsers()
  // const {createChannel} = useChannels()
  const [selected, setSelected] = useState<Array<Number>>([])
  const {isOpenNext, channelName, onClose} = props

  return (<>
    {isOpenNext &&
       <article onClick={e => e.stopPropagation()}>
        <header>
          <h2>Add Members</h2>
          <CgClose size={20} onClick={onClose}/>
        </header>
        <div>
          <h3># {channelName}</h3>
          {/* <SearchMember setSelected={setSelected}/> */}
          <h4>Users to be added:</h4>
          {selected && 
            selected.map((id: any) => (
              <span key={id}>
                <img src=" " alt="no image"/>
                {/* <p>{getEmailById(id)}</p> */}
                <CgClose size={18} onClick={() => {
                  const filtered = selected.filter(_id => _id !== id)
                  setSelected(filtered)
                }}/>
              </span>
            ))
          }
        </div>
        <button onClick={() => {
          // createChannel(channelName, selected)
          // location.reload()
        }}>{
          selected.length ? 'Create' : 'Skip for now'
        }</button>
      </article>
    }
  </>)
}

export default MembersModal
