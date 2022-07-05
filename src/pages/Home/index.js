import { Container, Movie, MovieList } from "./styles";
import { APIKey } from "../../config/key";
import { useState, useEffect } from 'react'


function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        //consumir a api...

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then(Response => Response.json())
            .then(data => { 
                console.log(data.results)
                setMovies(data.results)})
        
    }, [])
    
    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href="https:www.google.com.br"><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
                
            </MovieList>
        </Container>
        
    )

}

export default Home;