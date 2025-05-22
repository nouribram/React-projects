import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const hasLiked = true;


const Card = ({ title }) => {
    
    const [count, setCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

  
  useEffect(() => {
  console.log(`${title} has been liked ${hasLiked}`);
  }, [title, hasLiked]);

   useEffect

  return(

     <div className="card" onClick={() => setCount((prevState) => prevState + 1)}>
     
      <h2>{title} <br/> {count}</h2>

      <button onClick={() => setHasLiked(true)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

const App = () => {



  return(

    <div className='card-container'>

      <Card title="Star Wars" rating={5} isCool={true} hasLiked={hasLiked}/>
      <Card title="Avatar"/>
      <Card title="Lion King"/>

    </div>
  )
}

export default App
