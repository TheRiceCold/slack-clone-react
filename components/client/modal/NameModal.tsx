import {CgClose} from 'react-icons/cg'
import {FC, Dispatch} from "react"

interface IProps {
  onClose: () => void
  isOpenNext: boolean
  channelName: string
  setOpenNext: Dispatch<boolean>
  setChannelName: Dispatch<string>
}

const NameModal: FC<IProps> = props => {
  const {
    onClose, isOpenNext, setOpenNext,
    channelName, setChannelName } = props

  const handleClick = () => { 
    if (!channelName || channelName.length < 3 || channelName.length > 15) {
      alert('Name should be within 3-15 characters long')  
    } else setOpenNext(true)
  }

  return (<>
    {!isOpenNext &&
      <article onClick={e => e.stopPropagation()}>
        <header>
          <h2>Create a Channel</h2>
          <CgClose size={20} onClick={onClose}/>
        </header>
        <div>
          <p>{`Channels are where your team communicates. They're best when
            organized around a topic - #marketing, for example.`}
          </p>
          <p>Name</p>
          <div>
            <span>#</span>
            <input
              placeholder='e.g. plan-budget'
              onChange={e => setChannelName(e.target.value)}
            />    
          </div>
        </div>
        <button onClick={handleClick}>Next</button>
      </article>
    }</>)
}

export default NameModal
