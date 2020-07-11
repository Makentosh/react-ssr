import NextNprogress from 'nextjs-progressbar'
import '../styles/main.scss'

export default function MyApp({Component, pageProps}) {
  return (
      <>
        <NextNprogress
            color={"yellow"}
            startPosition={"top"}
            stopDelayMs={"200"}
            height="10"
        />
        <Component {...pageProps}/>

      </>
  )
}
