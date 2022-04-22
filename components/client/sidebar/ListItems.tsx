import styles from "@/styles/Client.module.scss"

import {NextFunctionComponent} from "next"
import Link from "next/link"

import {RiArrowRightSFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import {HiPlus} from 'react-icons/hi'
import {useState} from 'react'

// ListItems Component 
const ListItems:NextFunctionComponent = props => {
  const {
    addClick, itemKey, 
    itemImg, label, list, 
    path, addGeneral, slackbot } = props

  const [isRotate, setIsRotate] = useState(false)
  const [showOptions, isShowOptions] = useState(false)

  return (
    <div className={styles.sidebarListItems}>
      <div
        isRotate={isRotate} 
        showOptions={showOptions}
        className={styles.sidebarTabItem}
        onMouseEnter={() => isShowOptions(true)}
        onMouseLeave={() => isShowOptions(false)}
      >
        <div>
          <button onClick={() => setIsRotate(!isRotate)}>
            <RiArrowRightSFill size={20}/>
          </button>
          <p styled={{marginLeft: '8px'}}>{label}</p>
        </div>
        <div>
          <button>
            <FiMoreVertical size={18}/>
          </button>
          <button onClick={addClick}>
            <HiPlus size={18}/>
          </button>
        </div>
      </div>
      <ul isRotate={isRotate}>
        {addGeneral && 
          <Link href="channel/general">
            <a># general</a>
          </Link>
        }
        {slackbot && 
          <Link href="/">
            <a>
              <img src="/slack-bot.svg"/>
              <p>Slackbot</p>
            </a>
          </Link>
        }
        {list?.map((item, i) => (
          <Link key={i} href={path+'/'+item.id}>
            <a>
              {itemImg}
              <p>{item[itemKey]}</p>
            </a>
          </Link> 
        ))}
      </ul>
    </div>
  )
}

export default ListItems
