import type { NextPage } from "next"

import AuthPage from "@/authPage/AuthPage"
import {useAuth} from "../contexts/AuthProvider"

import styles from "@/styles/Auth.module.scss"

const Register: NextPage = () => {
  const {login} = useAuth

  const form = {
    btnLabel: 'Register',
    inputList: [
      { id: 'email',
        type: 'email',
        placeholder: 'name@work-email.com'
      },
      { id: 'pwd',
        type: 'password',
        placeholder: 'Enter your password'
      },
      {
        id: 'confirmPwd',
        type: 'password',
        placeholder: 'Confirm password'
      }
    ],
    onSubmit: async e => {
      e.preventDefault()
    }
  }

  return (
    <main className={styles.authPage}>
      <AuthPage
        form={form}
        link="/login"
        title="Join Slack"
        linkLabel="I have an account"
        description="We suggest using email address you use at work."
      />
    </main>
  )
}

export default Register
