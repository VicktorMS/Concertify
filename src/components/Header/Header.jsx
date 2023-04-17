import './Header.css'
import Logo from '../Logo/Logo'

export default function Header(props) {
  return (
    <div className='header'>
      <Logo />
      <div className='headerSearchBar'></div>
      <img className='headerFilter'/>
    </div>
  )
}