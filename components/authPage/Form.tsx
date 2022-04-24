import {FC} from "react"
import {IoMdEye} from "react-icons/io"

import {FormType, InputType} from "./types"

import styles from "@/styles/Auth.module.scss"

export default(props): FC<FormType> => {
  const {btnLabel, inputList, onSubmit} = props

  return (
    <form onSubmit={onSubmit}>
      {inputList.map(
        ({id, type, placeholder}: InputType, idx) => (
          <div key={idx} className={styles.form_control}>
            <input key={idx} 
              type={type} id={id} 
              placeholder={placeholder}/>
            {type === "password" && <IoMdEye onClick={e => console.log(e)}/>}
            {/* <IoMdEyeOff/> */}
          </div>
        ))}
      <input type="submit" value={btnLabel}/>
    </form>
  )
}
