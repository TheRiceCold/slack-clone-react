import {FC, useState, useEffect} from 'react'
import {BiLockAlt} from 'react-icons/bi'

// import Conversations from '@/components/Conversations'
import {useUsers} from '@/contexts/UsersProvider'

// DirectMessage Component
const ClientMessage: FC = () => {
  // const {id} = useParams()
  // const {getAllUsers} = useUsers()
  // const [email, setEmail] = useState('')

  // useEffect(() => {
  //   (async() => {
  //     const users = await getAllUsers()
  //     const found = users.find(user => user.id+'' === id)
  //     setEmail(found.email)
  //   })()
  // }, [id])

  return (
    <section>
      <header>
        <BiLockAlt/>
        {/* <p>{email}</p> */}
      </header>
      {/* <Conversations id={id} type='User'/> */}
    </section>
  )
}

export default ClientMessage
