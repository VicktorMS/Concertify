import './GetStarted.css'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo/Logo'
import Button from '../components/Button/Button'

export default function Home() {
  return (
    <div className="getStarted">
      <div className="logo-and-intro-wrapper">
        <Logo />
        <div className="intro-text">
          <p className="hidden">Encontre shows de seus artistas</p>
          <p className="hrrc-styled hidden">FAVORITOS</p>
        </div>
      </div>
      <Button className="getStarted-btn">
        <Link className='getStarted-link' to="/home">Get Started</Link>
      </Button>
    </div>
  )
}
