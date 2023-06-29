const Button = (props: any) => {
  return (
    <div
      style={props.style}
      className="button f-col f-j-center"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default Button
