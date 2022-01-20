import React, {useContext} from 'react'
import {AppContext} from './context'
import MovieCard from './Moviecard'
import './styles.css'

const Movies = () => {
  const { movies} = useContext(AppContext)
  console.log(movies)

  return (
    <section className='movies'>
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title} = movie
        return (
          <MovieCard poster={poster} title={title} id={id}/>
        )
      })}
    </section>
  )
}

export default Movies 