import {useAuth} from '../../contexts/AuthProvider'
import {useRoutes} from 'react-router-dom'
<<<<<<< HEAD
import NotFound from './NotFound'
import SignUp from './SignUp'
import Client from './Client'
import Login from './Login'

import NewMessage from './clientRoutes/NewMessage'
import General from './clientRoutes/General'
import Channel from './clientRoutes/Channel'
import Direct from './clientRoutes/Direct'
import Chat from './clientRoutes/Chat'

=======
import Client from './client/Client'
import NotFound from './NotFound'
import SignUp from './SignUp'
import Login from './Login'

>>>>>>> 7b386eb1bb74171a23b339b8c8aa410399f517a7
export default() => {
  const {user} = useAuth()
  const mainPage = user ? <Client/> : <Login/>

  return useRoutes([
<<<<<<< HEAD
    { path: '/', element: mainPage, },
    { path: 'client', element: mainPage,
      children: [
        { path: '', element: <General/> },
        { path: 'chat', element: <Chat/> },
        { path: 'direct', element: <Direct/> },
        { path: 'new', element: <NewMessage/> },
        { path: 'channel', element: <Channel/> }
      ]
    },
=======
    { path: '/', element: mainPage, 
      children: [ ]
    },
    { path: 'login', element: mainPage },
>>>>>>> 7b386eb1bb74171a23b339b8c8aa410399f517a7
    { path: 'signup', element: <SignUp/>},
    { path: '*', element: <NotFound/>},
  ])
}

