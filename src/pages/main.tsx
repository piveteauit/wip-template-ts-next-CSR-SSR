import React from "react"
import Layout from "../view/layout"
import Link from "../view/link"

export async function getServerSideProps({ req, res }: any) {
  console.log("---- main: ", res.pageParams)
  return {
    props: {
      value: res.pageParams?.test,
    },
  }
}

export default function Main(props: any) {
  return (
    <Layout>
      <h4> From docker HMR 98: RPI CSR/SSR template {props.value}</h4>

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
