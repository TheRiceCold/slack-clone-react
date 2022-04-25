import {FormEvent} from "react"

export type AuthInputType = {
  id: string,
  type: string,
  placeholder: string
}

export type AuthFormType = {
  inputList: AuthInputType[],
  btnLabel: string,
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
