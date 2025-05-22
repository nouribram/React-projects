import React from 'react'

const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language } 
}) => {
  return (
    <div className="movie-card">
 
        <img src={poster_path ? 'https://image.tmdb' 
        
        />
    </div>
  )
}

export default MovieCard
