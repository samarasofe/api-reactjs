import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { APIKey } from "../../config/key"

function Details() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)
        .then(Response => Response.json())
        .then(data => { 

            const { title, poster_path, overview, release_date } = data

            const movie = {
                id,
                title,  
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseDate: release_date
            }
            console.log(movie)
            setMovie(movie)
        }) 

    }, [id])

    return(
        <h1>Página de Detalhes</h1>
    )
}

export default Details