import React, {useContext} from 'react'
import { AppContext } from './context'

const Searchform = () => {
   const {query, setQuery} = useContext(AppContext)
   
    return (
        
        <div className='searchform'>
            <form >
                <input 
                className='form'
                type="text"
                placeholder='Search for a movie'
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
            </form>
        </div>
    )
        
}

export default Searchform
