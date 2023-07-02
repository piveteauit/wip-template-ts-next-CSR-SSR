import React from "react"
import Head from "next/head"
import Link from './link';

const renderBack = ({backPath, goBack}: any) => {
  const onClick = (goBack) ? (evt: any) => {
    evt.preventDefault();
    goBack();
  } : undefined;
  return (
    <Link onClick={onClick} style={{ position: "fixed", fontSize: "3vh" }} href={"#"} >
      Back{" "}
    </Link>
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
      {props.backPath ?? renderBack(props)}
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
