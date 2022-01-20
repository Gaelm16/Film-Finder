import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const MovieCard = ({poster, title, id}) => {
    return (
        <Link to={`/movies/${id}`} className='movie' key={id}>
            <article>
                <img 
                src={poster} 
                alt={title} 
                />
            </article>
        </Link>
    )
}



export default MovieCard
