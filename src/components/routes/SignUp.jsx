import {useAuth} from '../../contexts/AuthProvider'
import {inputData} from '../../data/authInputData'
import styled from 'styled-components'
<<<<<<< HEAD
import {useState} from 'react'
import Form from '../Form'
=======
import Form from '../stateless/Form'
import {useState} from 'react'
>>>>>>> 7b386eb1bb74171a23b339b8c8aa410399f517a7

export default() => {
  const {signUp} = useAuth()
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value

    if(!email || !password || !confirmPassword) return

    signUp({
      'email': email,
      'password': password,
      'password_confirmation': confirmPassword
    })
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
`
