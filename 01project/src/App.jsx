import { useEffect, useState } from 'react'
import './App.css'



const Card = ({ title }) => {

  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]); // runs only when `hasLiked` changes

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
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
