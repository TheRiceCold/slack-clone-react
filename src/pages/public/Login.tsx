import styles from "@/styles/auth/Auth.module.sass";

import {useAuth} from "@/contexts/AuthContext";
import {FC, FormEvent} from "react";

import AuthInputType from "@/types/AuthInputType";
import AuthPage from "@/layouts/auth/AuthPage";


const Login: FC = () => {
  const {login} = useAuth();

  const inputList: AuthInputType[] = [
    { 
      id: "email",
      type: "email",
      placeholder: "name@work-email.com"
    },
    { 
      id: "pwd", 
      type: "password", 
      placeholder: "Enter your password" 
    }
  ];

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const email = target.email.value;
    const pwd = target.pwd.value;

    const res = await login(email, pwd);
    if (res.status === 200) 
      location.reload();
    else {
      const [message]: string = res.data.errors;
      alert(message);
    }
  };

  const authPageProps = {
    form: {
      inputList, 
      buttonLabel: "Login", 
      onSubmit: handleSubmit
    },
    link: "/signup",
    title: "Sign in to Slack",
    linkLabel: "Create an Account",
    description: "We suggest using email address you use at work."
  }

  return (
    <div className={styles.auth_page}>
      <AuthPage {...authPageProps}/>
    </div>
  );
}

export default Login;
