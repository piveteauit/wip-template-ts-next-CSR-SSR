import React from "react";
import Layout from "../view/layout";

export default function Main(props: any) {
  return (
    <Layout>
      <h4> RPI CSR/SSR template </h4>

      <div style={{ marginBottom: "4vh" }} />
      <ul className="large_li">
        <li>
          {" "}
          <a href="/preload_data"> Preloaded SSR </a>{" "}
        </li>
        <li>
          {" "}
          <a href="/load_data_via_api"> Mixed CSR </a>{" "}
        </li>
      </ul>
    </Layout>
  );
}
