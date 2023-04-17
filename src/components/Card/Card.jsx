import './Card.css'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.image} className='cardImage'/>
      <h1 className='cardTitle'>{props.title}</h1>
      <p className='cardText'>{props.text}</p>
    </div>
  )
}