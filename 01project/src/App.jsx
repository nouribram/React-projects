import { useState } from 'react'
import './App.css'



const Card = ({ title }) => {

  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(true)}>
       {hasLiked ? '💖' : '♡'} 
      </button>
    </div>
  )
}


const App = () => {

  return(
    <div className='card-container'>
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="The matrix" />
      <Card title="The lion kong" />
    </div>
  )
}

export default App
