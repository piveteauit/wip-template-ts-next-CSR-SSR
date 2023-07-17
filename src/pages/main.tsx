import React, { useState } from "react"
import Layout from "../view/layout"
import Link from "../view/link"
export async function getServerSideProps({
  req,
  res,
}: {
  req: Express.Request
  res: Express.Response & any
}) {
  return {
    props: {
      value: res.pageParams?.test,
    },
  }
}

export default function Main(props: any) {
  const [loaded, setloaded] = useState(false)
  return (
    <Layout>
      <h4
        onLoad={() => setloaded(true)}
        className={`font-bold ${
          loaded ? "text-red-50" : "text-black"
        } animate-ping animate-bounce hover:blur-3xl left-0`}
      >
        {" "}
        From docker HMR 98: RPI CSR/SSR template {props.value}
      </h4>

      <span className="font-normal hover:border-l-indigo-600 hover:animate-bounce animate-pulse">
        Hell span;
      </span>

      <h5 className=" animate-ping blur-3xl ">Toto</h5>

      <div style={{ marginBottom: "4vh" }} />
      <ul className="large_li">
        <li>
          <Link href="/load_data_via_api"> Mixed CSR </Link>{" "}
        </li>
        <li>
          <Link href="/preload_data"> Preloaded SSR </Link>{" "}
        </li>
        <li>
          <Link href="/users"> Users list </Link>{" "}
        </li>
      </ul>
    </Layout>
  )
}
