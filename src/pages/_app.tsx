// https://nextjs.org/docs/basic-features/built-in-css-support
import "../public/main.css"
import { useRouter } from "next/router"
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: any) {
  const router = useRouter()
  pageProps.goBack = router?.back
  pageProps.backPath = router?.basePath

  return <Component {...pageProps} />
}
