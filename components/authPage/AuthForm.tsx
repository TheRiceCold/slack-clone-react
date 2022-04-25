import {IoMdEye} from "react-icons/io"
import {FC} from "react"

import {AuthFormType} from "@/types/authTypes"

import styles from "@/styles/Auth.module.scss"

const AuthForm: FC<AuthFormType> = props => {
  const {inputList, btnLabel, onSubmit} = props

  return (
    <form onSubmit={onSubmit}>
      {inputList.map(
        ({id, type, placeholder}, idx) => (
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

export default AuthForm
