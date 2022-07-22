import styles from "@/styles/auth/Auth.module.sass";

import {useAuth} from "@/contexts/AuthContext";
import {FormEvent} from "react"
import {FC} from "react";

import AuthPage from "@/layouts/auth/AuthPage";

const Signup: FC = () => {
  const {signup} = useAuth();

  const inputList = [
    { 
      id: "email",
      type: "email",
      placeholder: "name@work-email.com"
    },
    { 
      id: "pwd",
      type: "password",
      placeholder: "Enter your password"
    },
    {
      id: "confirmPwd",
      type: "password",
      placeholder: 'Confirm password'
    }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const email = target.email.value;
    const pwd = target.pwd.value;
    const confirmPwd = target.confirmPwd.value;

    const res = await signup(email, pwd, confirmPwd);
    console.log(res);
    // router.push("/client")
  };
    
  const authPageProps = {
    form: {
      inputList,
      buttonLabel: "Sign Up",
      onSubmit: handleSubmit
    },
    link: "/login",
    title: "Join Slack",
    linkLabel: "I have an account",
    description: "We suggest using email address you use at work."
  };

  return (
    <div className={styles.auth_page}>
      <AuthPage {...authPageProps} />
    </div>
  );
}

export default Signup;
