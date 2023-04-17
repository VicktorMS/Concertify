import './Button.css'

export default function Button(props) {
  return (
    <button className="white-button">{props.children}</button>
  )
}
