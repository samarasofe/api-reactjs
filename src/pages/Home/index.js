import { Container, Movie, MovieList } from "./styles";


function Home() {

    const movies = [
        {
            id: 1,
            title: 'Spider Man',
            Image_url:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg" alt="Spider Man'
        },
        {
            id: 2,
            title: 'Avengers',
            Image_url:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg" alt="Spider Man'
        },
        {
            id: 3   ,
            title: 'Batman',
            Image_url:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg" alt="Spider Man'
        },
        {
            id: 1,
            title: 'Spider Man',
            Image_url:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg" alt="Spider Man'
        },
        {
            id: 2,
            title: 'Avengers',
            Image_url:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg" alt="Spider Man'
        },
        {
            id: 3   ,
            title: 'Batman',
            Image_url:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg" alt="Spider Man'
        }

    ]


    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href="https:www.google.com.br"><img src={movie.Image_url} alt={movie.title}/></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
                
            </MovieList>
        </Container>
        
    )

}

export default Home;