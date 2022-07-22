import {FormEvent} from "react"

import AuthInputType from "./AuthInputType";

type AuthFormType = {
  buttonLabel: string;
  inputList: AuthInputType[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

export default AuthFormType;
