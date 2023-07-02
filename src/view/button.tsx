const Button = (props: any) => {
  return (
    <div
      style={props.style}
      className="hover:bg-slate-500 transition-all:2s"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default Button
