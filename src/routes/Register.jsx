import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useState} from 'react'

import {useAuth} from '@/providers/AuthProvider'
import slackLogo from '@/assets/slack-logo.svg'

import InputField from '@/styled/InputField'
import Toast from '@/components/Toast'
import Button from '@/styled/Button'

// Register Component 
export default() => {
  const [toast, setToast] = useState({
    show: false, 
    type:'fail', 
    message: '', 
  })

  const inputFields = [
    {
      id: 'email',
      type: 'email',
      placeholder: 'name@work-email.com'
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Enter your password'
    },
    {
      id: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm password'
    }
  ]

  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value

    if(!email && !password && !confirmPassword) {
      setToast({ 
        show: true, 
        type: 'fail',
        message: 'Fill in required fields',
      })
      setTimeout(() => setToast({show: false}), 3000)
    } else {
      useAuth.signup(email, password, confirmPassword)
      .then(() => {
        setToast({
          show: true,
          type: 'success',
          message: 'Registered successfully',
        })
        setTimeout(() => setToast({show: false}), 3000)
      })
      .catch(err => {
        const [message] = err.response.data.errors.full_messages
        setToast({show: true, type: 'fail', message: message})
        setTimeout(() => setToast({show: false}), 3000)
      })
    }
  }

  return(
    <SignUpPage>
      <Content>
        <img src={slackLogo} alt='slack logo'/>
        <h3>Join Slack</h3>
        <p>
          We suggest using the <strong>email address you use at work.</strong>
        </p>
        <form onSubmit={handleSubmit}>
          {inputFields.map((input, idx) => (
            <InputField
              key={idx}
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
          <Button.primary>Sign Up</Button.primary>
        </form>
        <Link to='/'>
          I already have an account
        </Link>
        <Toast 
          type={toast.type} 
          show={toast.show} 
          message={toast.message}
        />
      </Content>
    </SignUpPage>
  )
}


// Styled Components
const SignUpPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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
    padding-bottom: 20px;
  }
  a {
    margin-top: 25px;
    color: whitesmoke;
    text-decoration: none;
    :hover { text-decoration: underline; }
  }
`
