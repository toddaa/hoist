import '../styles/globals.scss'
import '../utils/fontawesome.js';

import Amplify from 'aws-amplify'
import config from '../aws-exports'

import Header from '../components/Header'

Amplify.configure({
  ...config, ssr: true
})

function MyApp({ Component, pageProps }) {
  const authed = false
  return (
    <>
      <Header auth={authed} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
