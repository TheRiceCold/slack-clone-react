import styles from "@/styles/auth/Auth.module.sass";

import {IoMdEye, IoMdEyeOff} from "react-icons/io";
import {FC, MouseEvent} from "react";

import AuthInputType from "@/types/AuthInputType";
import AuthFormType from "@/types/AuthFormType";

const AuthForm: FC<AuthFormType> = ({
  onSubmit, 
  inputList,
  buttonLabel, 
}) => {
  const handleTogglePassword = (
    e: MouseEvent<SVGElement>, 
    id: Number | string
  ) => {
    const target = e.target as SVGElement;
    const parentEl = target.parentNode as HTMLElement;
    const parentParentEl = parentEl.parentNode as HTMLElement;
    const input = parentParentEl.querySelector(`input[id="${id}"]`) as HTMLInputElement;
    input.type = (input.type === "password") ? "" : "password";
  };

  return (
    <form onSubmit={onSubmit}>
      {inputList.map((input, index: any) => (
        <div key={index} className={styles.form_control}>
          <input 
            key={index} 
            id={input.id} 
            type={input.type} 
            placeholder={input.placeholder}
          />
          {input.type === "password" && (
            <IoMdEye onClick={event => handleTogglePassword(event, input.id)} />
          )}
        </div>
      ))}
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default AuthForm;
