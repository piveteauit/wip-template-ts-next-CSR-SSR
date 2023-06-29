import React from "react"
import Layout from "../view/layout"
import Button from "../view/button"
import Link from "next/link"

export async function getServerSideProps({ req, res }: any) {
  return {
    props: {
      value: parseInt(res.pageParams.value, 10),
    },
  }
}

const PreloadData = (props: any) => {
  const [value, setValue] = React.useState(props.value)
  const increment = React.useCallback(async () => {
    const response = await fetch("/api/increment", { method: "POST" })
    const json = await response.json()
    setValue(json.i)
  }, [])
  return (
    <Layout title={"SSR Preloaded data"}>
      <h2>SSR Preloaded data</h2>

      <div>
        <Link href="/load_data_via_api">this example</Link>
      </div>

      <div className="f-row">
        <h2 style={{ marginRight: "6vw" }}> {value} </h2>
        <Button style={{ width: "max(12vw, 60px)" }} onClick={increment}>
          {" "}
          +{" "}
        </Button>
      </div>
      <div style={{ marginBottom: "2vh" }} />
      <Link href="/"> Back </Link>
    </Layout>
  )
}

export default PreloadData
