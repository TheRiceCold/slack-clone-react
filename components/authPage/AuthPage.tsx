import Link from "next/link"
import {FC} from "react"

import {AuthFormType} from "@/types/authTypes"
import AuthForm from "./AuthForm"

import styles from "@/styles/Auth.module.scss"

export interface IProps {
  form: AuthFormType
  link: string
  title: string
  linkLabel: string
  description: string
}

const AuthPage: FC<IProps> = props => {
  const {
    link, title, form,
    linkLabel, description } = props

  return (
    <section className={styles.authContent}>
      <img src="/slack-logo.svg" alt="slack logo"/>
      <h3>{title}</h3>
      <p>{description}</p> 
      <AuthForm 
        btnLabel={form.btnLabel} 
        inputList={form.inputList} 
        onSubmit={form.onSubmit}
      />
      <Link href={link}>
        <a>{linkLabel}</a>
      </Link>
    </section>
  )
}

export default AuthPage
