import React from "react"
import Head from "next/head"


const renderBack = (backPath: any) => {
  return (
    <a style={{ position: "fixed", fontSize: "3vh" }} href={backPath}>
      Back{" "}
    </a>
  )
}

export default function Layout(props: any) {
  return (
    <div>
      <Head>
        {props?.title ? (
          <title>{props?.title}</title>
        ) : (
          <title>RPI CSR / SSR !</title>
        )}
        <meta name="description" content="Barebones nextjs+express setup" />
        <meta name="keywords" content="nextjs,express" />
        <meta name="author" content="Alexey Chernikov" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      {props.backPath ?? renderBack(props.backPath)}
      <div
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          paddingTop: "16px",
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
