import {useAuth} from '../contexts/AuthProvider'
import {inputData} from '../data/authInputData'
import Toast from '../components/Toast'
import styled from 'styled-components'
import Form from '../components/Form'
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default() => {
  const {signup} = useAuth()

  const [toast, setToast] = useState({
    show: false, 
    type:'fail', 
    message: '', 
  })

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
      signup(email, password, confirmPassword).
        then(() => {
          setToast({
            show: true,
            type: 'success',
            message: 'Registered successfully',
          })
          setTimeout(() => setToast({show: false}), 3000)
        }).
        catch(e => {
          const [message] = e.response.data.errors.full_messages
          setToast({show: true, type: 'fail', message: message})
          setTimeout(() => setToast({show: false}), 3000)
        })
    }
  }

  return(
    <SignUpPage>
      <Content>
        <img src='./slack-logo.svg'/>
        <h3>Join Slack</h3>
        <p>
          We suggest using the <strong>email address you use at work.</strong>
        </p>
        <Form 
          btnLabel='Sign Up'
          inputData={inputData}
          handleSubmit={handleSubmit}
        />
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

const SignUpPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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
    padding-bottom: 20px;
  }
  a {
    margin-top: 25px;
    color: whitesmoke;
    text-decoration: none;
    :hover { text-decoration: underline; }
  }
`
