import React, {useContext} from 'react'
import Navbar from './Navbar'
import { AppContext } from './context'
import {Link} from 'react-router-dom'
import './styles.css'

const Favorites= () => {
    const {myfavorites, removefromfavorites} = useContext(AppContext)

    if(myfavorites.length === 0 ){
        return (
        <div>
            <Navbar/>
            <div className="page">
                <div className="header">
                    <h1>Favorites List</h1>
                </div>
                <section className='movies'>
                    <h2>No movies in favorites</h2>
                </section>
            </div>
        </div>
        )
    }

    return (
        <div>
            <Navbar/>
            <div className="page">
                <div className="header">
                    <h1>Favorites</h1>
                </div>
                <div className="favorites">
                {myfavorites.map((movie) => {
                    const { imdbID: id, Poster: poster, Title: title} = movie
                    return(
                        <article className='moviess' key={id}>
                            <Link to={`/movies/${id}`} key={id}>
                                <img src={poster} alt={title}/>
                            </Link>
                            <div>
                                <h1 className='title'>{title}</h1>
                                <button className='clickbtn' 
                                onClick={() => removefromfavorites(movie)}>
                                    Remove from favorites
                                </button>
                            </div>
                        </article>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Favorites
