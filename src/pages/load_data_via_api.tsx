import React from "react"
import Layout from "../view/layout"
import Button from "../view/button"

const LoadDataViaApi = (props: any) => {
  const [value, setValue] = React.useState(null)
  const increment = React.useCallback(async () => {
    const response = await fetch("/api/increment", { method: "POST" })
    const json = await response.json()
    setValue(json.i)
  }, [])
  React.useEffect(() => {
    // Timeout to showcase loading state
    setTimeout(async () => {
      const response = await fetch("/api/get", { method: "GET" })
      const json = await response.json()
      setValue(json.i)
    }, 2000)
  }, [])

  return (
    <Layout title={"CSR Preloaded data"}>
      <div className="f-row">
        <h2 style={{ marginRight: "6vw" }}>
          SSR + CSR
          <br />
          {value || "Loading (dalayed 2s)"}
        </h2>
        <Button style={{ width: "max(12vw, 60px)" }} onClick={increment}>
          {" "}
          +{" "}
        </Button>
      </div>
      <div style={{ marginBottom: "2vh" }} />
      <a href="/"> Back </a>
    </Layout>
  )
}

export default LoadDataViaApi
