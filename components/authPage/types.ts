import {FormEvent, HTMLFormElement} from "react"

export type InputType = {
  id: string,
  type: string,
  placeholder: string
}

export type FormType = {
  inputList: InputType[],
  btnLabel: string, 
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
