import {useAuth} from '../../contexts/AuthProvider'
import {useRoutes} from 'react-router-dom'
import Client from './client/Client'
import NotFound from './NotFound'
import SignUp from './SignUp'
import Login from './Login'

export default() => {
  const {user} = useAuth()
  const mainPage = user ? <Client/> : <Login/>

  return useRoutes([
    { path: '/', element: mainPage, 
      children: [ ]
    },
    { path: 'login', element: mainPage },
    { path: 'signup', element: <SignUp/>},
    { path: '*', element: <NotFound/>},
  ])
}

