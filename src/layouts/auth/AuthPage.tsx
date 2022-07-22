import styles from "@/styles/auth/Auth.module.sass";
import images from "@/constants/images";

import {Link} from "react-router-dom";
import {FC} from "react";

import AuthForm from "./AuthForm";
import AuthFormType from "@/types/AuthFormType";

interface IProps {
  form: AuthFormType; 
  link: string; 
  title: string;
  linkLabel: string;
  description: string;
};

const AuthPage: FC<IProps> = props => {
  const {
    link,
    form,
    title,
    linkLabel,
    description
  } = props;

  const authFormProps = (form: AuthFormType) => {
    return {
      onSubmit: form.onSubmit,
      inputList: form.inputList,
      buttonLabel: form.buttonLabel,
    };
  };

  return (
    <section className={styles.auth_page_content}>
      <img src={images.slackLogo} alt="slack logo" />
      <h3>{title}</h3>
      <p>{description}</p> 
      <AuthForm {...authFormProps(form)} />
      <Link to={link}>
        {linkLabel}
      </Link>
    </section>
  );
};

export default AuthPage;
