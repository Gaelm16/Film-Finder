import React, {useContext} from 'react'
import {Link, useParams} from 'react-router-dom'
import {AppContext} from './context'
import useFetch from './useFetch' 
import Navbar from './Navbar'
import './styles.css'

const SingleMovie = () => {
    const { id } = useParams()
    const { data: movie} = useFetch(`&i=${id}`)
    const {addmovietofavorites} = useContext(AppContext)

    const {Poster: poster, Title: title, Year: year, Plot: plot, Director: author, Runtime: time} = movie
    
    return (
        <div>
        <Navbar/>   
        <section className='single-movie' >
            <img src={poster} alt={title} />
            <div className='movie-info'>
                <h2>{title}</h2>
                <p>{author}</p>
                <p>{year}</p>
                <p>{plot}</p>
                <p>{time}</p>
                <Link to='/' >
                    <button className='clickbtn'>
                    Back to Home
                    </button>
                </Link>
                <button className='clickbtn' 
                onClick={() => addmovietofavorites(movie)}>
                    Add to Favorites
                </button>
            </div>
        </section>
        </div>
    )
}

export default SingleMovie 
