import {BsPinAngleFill} from 'react-icons/bs'
import {FC, useEffect, useState} from 'react'
import {HiPlus} from 'react-icons/hi'

import {useChannels} from '@/contexts/ChannelsProvider'
// import Conversations from '@/components/Conversations'

const ClientChannel: FC = () => {
  // const {id} = useParams()
  // const [channel, setChannel] = useState()
  // const {getChannelDetails} = useChannels()
  // const [members, setMembers] = useState(0)

  // useEffect(() => {
  //   (async() => {
  //     const { name, channel_members : members
  //     } = await getChannelDetails(id)
  //     setMembers(members)
  //     setChannel(name)
  //   })()
  // }, [id])

  return (
    <header>
      <nav>
        {/* <h4>{channel}</h4> */}
        <button>
          {/* {members && */}
          {/*   members.map((m, i) => { */}
          {/*     if (i === 3) return  */}
          {/*     return ( */}
          {/*       <UserAvatar  */}
          {/*         key={i} size={22}  */}
          {/*         src={defaultUserImg}  */}
          {/*         alt='user avatar' */}
          {/*       /> */}
          {/*     ) */}
          {/*   }) */}
          {/* } */}
          {/* <p>{members.length}</p> */}
        </button>
      </nav>
      <nav>
        <button>
          <BsPinAngleFill/>13 Pinned
        </button>
        <button>
          <HiPlus/>Add a bookmark
        </button>
      </nav>
      {/* <Conversations id={id} type='Channel'/> */}
    </header>
  )
}

export default ClientChannel
