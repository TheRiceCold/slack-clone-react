import AppRoutes from './components/routes/Routes'
import AuthProvider from './contexts/AuthProvider'
import {BrowserRouter} from 'react-router-dom'
import {StrictMode} from 'react'
import {render} from 'react-dom'
import './index.css'

const root = document.getElementById('root')

render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>, 
  root
)
