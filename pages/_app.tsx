import "../styles/globals.scss"
import type { AppProps } from "next/app"

import AuthProvider from "../contexts/AuthProvider"

const Slack = ({Component, pageProps}: AppProps) => (
  <AuthProvider>
    <Component {...pageProps}/>
  </AuthProvider>
) 

export default Slack
