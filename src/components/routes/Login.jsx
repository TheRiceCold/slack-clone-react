import {useAuth} from '../../contexts/AuthProvider'
import {inputData} from '../../data/authInputData'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Toast from '../stateful/Toast'
import Form from '../stateless/Form'
import {useState} from 'react'

export default() => {
  const {setUser, login} = useAuth()
  const [toast, setToast] = useState({
    show: false, 
    type:'fail', 
    message: '', 
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    if (!email || !password) {
      setToast({ 
        show: true, 
        type: 'fail',
        message: 'Fields cannot be empty',
      })
    } else {
      const user = await login({'email': email, 'password': password})
      if (user) {
        const userToken = btoa(JSON.stringify(user))
        localStorage.user = userToken
        setUser(atob(userToken))
      }
    }
  }

  const loginInputData = [...inputData] 
  loginInputData.pop()

  return (
    <LoginPage>
      <Content>
        <img src='./slack-logo.svg'/>
        <h3>Sign in to Slack</h3>
        <p>We suggest using the <strong>email address you use at work.</strong></p> 
        <Form
          btnLabel='Sign In'
          inputData={loginInputData}
          handleSubmit={handleSubmit}
        />
        <Link to='../signup'>
          Create an account
        </Link>
        <Toast 
          type={toast.type} 
          show={toast.show} 
          message={toast.message}
        />
      </Content>
    </LoginPage>
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
