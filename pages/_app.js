import '../styles/globals.css'
import 'tailwindcss/tailwind.css' 
import '../styles.css'
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from 'next-auth/react'


function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <NextNProgress />
      <Component {...pageProps} />;
    </SessionProvider>
  )
}

export default MyApp
