import styled from 'styled-components'
import {useState} from 'react'

import MembersModal from './MembersModal'
import NameModal from './NameModal'

export default({show, setShow})=> {
  const [openNext, isOpenNext] = useState(false)
  const [channelName, setChannelName] = useState('')

  const onClose = () => {
    setShow(false)
    isOpenNext(false)
  }

  return (<>
    {show &&
      <Overlay onClick={onClose}>
        <NameModal 
          onClose={onClose}
          openNext={openNext} 
          isOpenNext={isOpenNext} 
          channelName={channelName}
          setChannelName={setChannelName}
        />
        <MembersModal 
          onClose={onClose} 
          openNext={openNext}
          channelName={channelName}
        />
      </Overlay>
    }
  </>)
}

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`
