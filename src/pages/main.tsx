import React from "react"
import Layout from "../view/layout"
import Link from "next/link"

export default function Main(props: any) {
  return (
    <Layout>
      <h4> RPI CSR/SSR template </h4>

      <div style={{ marginBottom: "4vh" }} />
      <ul className="large_li">
        <li>
          <Link href="/preload_data"> Preloaded SSR </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/load_data_via_api"> Mixed CSR </Link>{" "}
          <Link href="/preload_data"> Preloaded SSR </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/load_data_via_api"> Mixed CSR </Link>{" "}
        </li>
      </ul>
    </Layout>
  )
}
