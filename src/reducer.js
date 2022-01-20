export const reducer = (state, action) => {
    if(action.type === 'ADD_MOVIE_TO_FAVORITES'){
        return {
            ...state, 
            myfavorites: [action.payload, ...state.myfavorites]
        }
    }
    if(action.type === 'REMOVE_FROM_FAVORITES'){
        return {
        ...state, 
         myfavorites: state.myfavorites.filter((movie) => movie !== action.payload)
    }
    }
}