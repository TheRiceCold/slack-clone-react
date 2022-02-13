import Unauthorized from './errorPages/Unauthorized401'
import NotFound from './errorPages/NotFound404'
import {useRoutes} from 'react-router-dom'
import SignUp from './SignUp'
import Client from './Client'
import Login from './Login'

// Client routes //
import GeneralChannel from './clientRoutes/GeneralChannel'
import DirectMessage from './clientRoutes/DirectMessage'
import NewMessage from './clientRoutes/NewMessage'
import Activity from './clientRoutes/Activity'
import SlackBot from './clientRoutes/SlackBot'
import Channel from './clientRoutes/Channel'
import Threads from './clientRoutes/Threads'

export default() => useRoutes([
  { path: '/', element: <Login/> },
  { path: 'client', element: <Client/>,
    children: [
      { path: '', element: <SlackBot/> },
      { path: 'new', element: <NewMessage/> },
      { path: 'threads', element: <Threads/> },
      { path: 'activity', element: <Activity/> },
      { path: 'channel/general', element: <GeneralChannel/> },
      { path: 'channel/:id', element: <Channel/> },
      { path: 'user/:id', element: <DirectMessage/> },
    ]
  },
  { path: 'signup', element: <SignUp/>},
  { path: '401', element: <Unauthorized/>},
  { path: '*', element: <NotFound/>},
])
