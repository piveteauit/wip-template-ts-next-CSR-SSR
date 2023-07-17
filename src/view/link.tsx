import NextLink from "next/link"

const ssr = ["/users", "/preload_data", "/admin/users"]

const isSSR = ({ href }) => ssr.includes(href)

export default function Link(props) {
  return isSSR(props) && props.href !== "/" ? (
    <a {...props} />
  ) : (
    <NextLink {...props} />
  )
}
