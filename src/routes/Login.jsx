import {Link, Navigate} from 'react-router-dom'
import styled from 'styled-components'
import {useState} from 'react'

import {useAuth} from '@/providers/AuthProvider'
import slackLogo from '@/assets/slack-logo.svg'

import InputField from '@/styled/InputField'
import Toast from '@/components/Toast'
import Button from '@/styled/Button'
import ClientPage from './Client'

export default() => {
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
      useAuth.login(email, password)
      .then(() => location.reload())
      .catch(e => {
        setToast({ 
          type: 'fail',
          message: 'User does not exist',
        })
        setTimeout(() => setToast({show: false}), 3000)
      })
    }
  }

  return (!useAuth.auth ?
    <LoginPage>
      <Content>
        <img src={slackLogo} alt='slack logo'/>
        <h3>Sign in to Slack</h3>
        <p>We suggest using the&nbsp;
          <strong>email address you use at work.</strong>
        </p> 
        <form onSubmit={handleSubmit}>
          <InputField id='email' type='email' placeholder='name@work-email.com'/>
          <InputField id='password' type='password' placeholder='Enter your password'/>
          <Button.primary>Sign In</Button.primary>
        </form>
        <Link to='register'>Create an account</Link>
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


// Styled Components
const LoginPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  color: whitesmoke;
  align-items: center;
  background: #19191b;
  justify-content: center;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
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
