import {useAuth} from '../contexts/AuthProvider'
import {Link, Navigate} from 'react-router-dom'
import {inputData} from '../data/authInputData'
import Toast from '../components/Toast'
import styled from 'styled-components'
import Form from '../components/Form'
import ClientPage from './Client'
import {useState} from 'react'

export default() => {
  const {login, auth} = useAuth()

  const [toast, setToast] = useState({
    show: false, 
    type:'fail', 
    message: '', 
  })

  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    if (!email || !password) {
      setToast({ 
        show: true, 
        type: 'fail',
        message: 'Fields cannot be empty',
      })
      setTimeout(() => setToast({show: false}), 3000)
    } 
    else {
      login(email, password).
        then(() => location.reload()).
        catch(e => {
          setToast({ 
            type: 'fail',
            message: 'User does not exist',
          })
          setTimeout(() => setToast({show: false}), 3000)
        })
    }
  }

  const loginInputData = [...inputData] 
  loginInputData.pop()

  return (!auth ?
    <LoginPage>
      <Content>
        <img src='./slack-logo.svg' alt={'slack logo'}/>
        <h3>Sign in to Slack</h3>
        <p>We suggest using the <strong>email address you use at work.</strong></p> 
        <Form
          btnLabel='Sign In'
          inputData={loginInputData}
          handleSubmit={handleSubmit}
        />
        <Link to='signup'>
          Create an account
        </Link>
        <Toast 
          type={toast.type} 
          show={toast.show} 
          message={toast.message}
        />
      </Content>
    </LoginPage>
    : <Navigate to='/client'/>
  )
}

const LoginPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  color: whitesmoke;
  align-items: center;
  background: #19191B;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  padding: 70px;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  img { 
    height: 110px; 
    margin-bottom: 40px;
  }
  h3 { 
    font-size: 40px; 
    margin-bottom: 15px;
  }
  p { 
    font-size: 16px; 
    margin-bottom: 20px;
  }
  a {
    margin-top: 25px;
    color: whitesmoke;
    text-decoration: none;
    :hover { text-decoration: underline; }
  }
`

