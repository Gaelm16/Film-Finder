import React from 'react'
import Searchform from './searchform'
import { Link } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
    return (
       <nav className='nav'>
           <div className="nav-center">
            <div className="nav-header">
                <Link to='/' className='links-btn'> 
                    <h2>Film Finder</h2> 
                </Link>
            </div>
            <ul className='nav-links'>
                <li >
                    <Link className='links-btn' to='/favorites'>
                        <button className='links-btn'>My Favorites</button> 
                    </Link>
                </li>
                <li><Searchform/></li>
            </ul>
            {/* <Searchform/> */}
           </div>
       </nav>
    )
}

export default Navbar
