import React, {createContext, useReducer, useState} from 'react'
import useFetch from './useFetch'
import {reducer} from './reducer.js'

const initialState = {
   myfavorites: []
}

export const AppContext = createContext(initialState)

const AppProvider = ({children}) => {
    const [query, setQuery] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)
    const {data:movies, loading} = useFetch(`&s=${query}`)

   const addmovietofavorites = (movie) => {
      dispatch({type:'ADD_MOVIE_TO_FAVORITES', payload: movie})
   }

    const removefromfavorites = (movie) => {
      dispatch({type:'REMOVE_FROM_FAVORITES', payload: movie})
   }


    return (
      <AppContext.Provider value={{
           query, 
           setQuery, 
           movies, 
           loading, 
           addmovietofavorites, 
           removefromfavorites,
           myfavorites: state.myfavorites,
      }}>
          {children}
       </AppContext.Provider>
    )
}

export {AppProvider}
