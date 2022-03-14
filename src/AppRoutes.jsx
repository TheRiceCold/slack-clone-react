import {useRoutes} from 'react-router-dom'
// Routes
import Register from './routes/Register'
import Client from './routes/Client'
import Login from './routes/Login'
// Error Routes
import Unauthorized from './routes/errors/Unauthorized401'
import NotFound from './routes/errors/NotFound404'
// Client routes
import DirectMessage from './routes/client/DirectMessage'
import NewMessage from './routes/client/NewMessage'
import Activities from './routes/client/Activities'
import SlackBot from './routes/client/SlackBot'
import Channel from './routes/client/Channel'
import Threads from './routes/client/Threads'

// AppRoutes Component
export default() => useRoutes([
  { path: '/', element: <Login/> },
  { path: 'register', element: <Register/>},
  { path: 'client', element: <Client/>,
    children: [
      { path: '', element: <SlackBot/> },
      { path: 'new', element: <NewMessage/> },
      { path: 'threads', element: <Threads/> },
      { path: 'activity', element: <Activities/> },
      { path: 'channel/:id', element: <Channel/> },
      { path: 'user/:id', element: <DirectMessage/> },
    ]
  },
  { path: '401', element: <Unauthorized/>},
  { path: '*', element: <NotFound/>},
])
