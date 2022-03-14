// Modules
import {Outlet, Navigate, useLocation} from 'react-router-dom'
import styled from 'styled-components'
// Context Providers
import MessagesProvider from '@/providers/MessagesProvider'
import ChannelsProvider from '@/providers/ChannelsProvider'
import UsersProvider from '@/providers/UsersProvider'
import {useAuth} from '@/providers/AuthProvider'
// Components 
import Sidebar from '@/components/sidebar/Sidebar'
import Nav from '@/components/Nav'

// Client Component 
export default() => {
  const {auth} = useAuth()
  const location = useLocation()

  return (auth ?
    <ClientPage>
      <Nav/>
      <ChannelsProvider>
        <MessagesProvider>
          <Main>
            <UsersProvider>
              <Sidebar/>
              <Outlet/>
            </UsersProvider>
          </Main>
        </MessagesProvider>
      </ChannelsProvider>
    </ClientPage>
    : <Navigate to='/401'/>
  )
}


// Styled Components
const ClientPage = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-rows: 38px auto;
`

const Main = styled.div`
  color: #FFF;
  display: grid;
  background: #222529;
  grid-template-columns: 240px auto;
`
