import Link from "next/link"

import {FC} from "react"

import Form from "./Form"
import {FormType} from "./types"

import styles from "@/styles/Auth.module.scss"

interface Props {
  form: FormType
  link: string
  title: string
  linkLabel: string
  description: string
}

export default(props: Props): FC => {
  const {
    link, title, form,
    linkLabel, description
  } = props

  return (
    <section className={styles.authContent}>
      <img src="/slack-logo.svg" alt="slack logo"/>
      <h3>{title}</h3>
      <p>{description}</p> 
      <Form 
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
