import {useState, useEffect} from 'react'

const apikey = "df6a35a1"
export const api = `https://www.omdbapi.com/?apikey=${apikey}`

export const useFetch = (urlParams) => {
    const [data, setData] = useState([])

    const fetchMovie = async (url) => {
        const req = await fetch(url)
        const res = await req.json()
        if(res.Response === 'True'){
            setData(res.Search||res)
        } else{
            console.log('ERROR')
      }
    }

    // const fetchMovie = async (url) => {
    //     const req = await fetch(api)
    //     const res = await req.json()
    //     setData(res.Search)
    // }


    useEffect(() => {
        fetchMovie(`${api}${urlParams}`)
    }, [urlParams])

    return {data}
}

export default useFetch
