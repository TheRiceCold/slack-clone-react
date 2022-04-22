import type { NextPage } from "next"

import AuthPage from "@/authPage/AuthPage"
import {useAuth} from "../contexts/AuthProvider"

import styles from "@/styles/Auth.module.scss"

const Login: NextPage = () => {
  const {login} = useAuth

  const form = {
    inputList: [
      { id: 'email',
        type: 'email',
        placeholder: 'name@work-email.com'
      },
      { id: 'pwd',
        type: 'password',
        placeholder: 'Enter your password'
      }
    ],
    btnLabel: 'Login',
    onSubmit: async e => {
      e.preventDefault()
      const email = e.target.email.value
      const pwd = e.target.pwd.value
      await login(email, pwd)
    }
  }

  return (
    <main className={styles.authPage}>
      <AuthPage
        form={form}
        link="/register"
        title="Sign in to Slack"
        linkLabel="Create an account"
        description="We suggest using email address you use at work."
      />
    </main>
  )
}

export default Login
