import { useEffect, useState } from 'react'
import Search from './components/Search'


//const API_BASE_URL = '';

//const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const App = () => {
 
  const [searchTerm, setSearchTerm] = useState('Nourhan');

 const [errorMessage, setErrorMessagee] = useState('');
 
  const fetchMovies = async () => {
  try {
      
     const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

     const response = await fetch(endpoint, API_OPTIONS);
     
  } catch(error){

    console.error(`Error fetching movies ${error}`);
    setErrorMessagee('Error fetching movies');


  }
 }
 
 
  useEffect(() => {
   
  }, []);


  return(
    <main>
       <div className="pattern" />

          <div className="wrapper">
            
            <header>
              <img src="./hero-bg.jpg" alt="Hero Banner"/>
               <h1>Find <span className="text-gradient">Movies</span> youll enjoy without the hassle</h1>
               <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </header>
             
             <section className='all-movies'>
                 <h2>All movies</h2>
                 {errorMessage && }
             </section>
           
          </div>
       
    </main>
  )
}
