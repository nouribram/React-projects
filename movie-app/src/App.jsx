import { useEffect, useState } from 'react'
import Search from './components/Search'


const API_BASE_URL = '';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const App = () => {
 
  const [searchTerm, setSearchTerm] = useState('Nourhan');

  useEffect(() => {
   
  }, []);


  return(
    <main>
       <div className="pattern" />

          <div className="wrapper">
            
            <header>
              <img src="./hero-bg.jpg" alt="Hero Banner"/>
               <h1>Find <span className="text-gradient">Movies</span> youll enjoy without the hassle</h1>
            </header>

           <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
           
           <h1 className="text-white">{searchTerm}</h1>
          </div>
       
    </main>
  )
}
