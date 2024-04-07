import { Link } from 'react-router-dom'
import './Logo.css'

export default function Logo() {
  return (
    <Link to={'/home'} style={{ textDecoration: "none", color: "#fff" }}>
      <div className="logo-wrapper">
        <img src="/favicon/icons8-quarter-rest-ios-16-glyph-96.png"/>
        <h1 className="concertify-logo">Concertify</h1>
      </div>
    </Link>
  )
}
