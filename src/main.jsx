import {QueryClient, QueryClientProvider} from 'react-query'
import {BrowserRouter} from 'react-router-dom'
import {StrictMode} from 'react'
import {render} from 'react-dom'

import AuthProvider from './providers/AuthProvider'
import AppRoutes from './AppRoutes'
import './index.css'

const queryClient = new QueryClient()
render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
)
