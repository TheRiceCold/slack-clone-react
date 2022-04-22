import styles from "@/styles/Client.module.scss"

import {NextFunctionComponent} from "next"
import Link from "next/link"

import {FiMoreVertical} from 'react-icons/fi'
import {BsChatText} from 'react-icons/bs'
import {HiAtSymbol} from 'react-icons/hi'


const TabItems:NextFunctionComponent = () => (
  <div className={styles.sidebarTabItems}>
    <Link href='client/threads'>
      <a>
        <BsChatText size={18}/>
        <span>Threads</span>
      </a>
    </Link>
    <Link href='client/activity'>
      <a>
        <HiAtSymbol size={18}/>
        <span>Mentions & reactions</span>
      </a>
    </Link>
    <div>
      <FiMoreVertical size={18}/>
      <span>More</span>
    </div>
  </div>
)

export default TabItems
