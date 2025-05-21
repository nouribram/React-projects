import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const hasLiked = true;


const Card = ({ title }) => {

    const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(true)}>
        {hasLiked ? 'Liked' : 'Like'}
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
