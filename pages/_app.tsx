import "../styles/globals.scss"
import type { AppProps } from "next/app"

import AuthProvider from "../contexts/AuthProvider"

export default({Component, pageProps}: AppProps) => (
  <AuthProvider>
    <Component {...pageProps}/>
  </AuthProvider>
) 
