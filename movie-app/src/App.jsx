import { useEffect, useState } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';


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
 
 const [moviesList, setMovieList] = useState([]);

 const [isLoading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessagee('');
  try {
      
     const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

     const response = await fetch(endpoint, API_OPTIONS);
     
     if(!response.ok){
        throw new Error('Failed to fetch movies');
     }
     const data = await response.json();
    
     if(data.response == 'False'){
            
       setErrorMessagee(data.Error || 'Failed to fetch movies');
       setMovieList([]);
       return;
     }
    
     setMovieList(data.results || []);

  } catch(error){

    console.error(`Error fetching movies ${error}`);
  
    setErrorMessagee('Error fetching movies');
 
  } finally {

    setIsLoading(true);

  }

 }
 
 
  useEffect(() => {
   fetchMovies();
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
                 <h2 className="mt-[20px]">All movies</h2>

                 {isLoading ? (
                  <Spinner />
                 ) : errorMessage ? (
                  <p className="text-red-500">{errorMessage}</p>
                 ) : (
                  <ul>
                    {moviesList.map((movie) => (
                     <MovieCard key={movie.id} movie={movie}/>
                       
                    ))}
                  </ul>
                 )}

             </section>
           
          </div>
       
    </main>
  )
}
