import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../MovieCard.css"


const MovieCard = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/movie/popular?api_key=737e03835100ab33e61e34415c05c60b&language=en-US&page=1"
            )
            .then((response) => setMovies(response.data.results))
    }, []);

    const filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().startsWith(props.search.toLowerCase());
    });

    console.log(filteredMovies);

    return (
        <div>
            <br />
            <h1 className="title">Welcome to Net Movies</h1>
            <br />
            <h4>All Movies is {movies.length}</h4>
            <br />
            <div className="card-container">
                {filteredMovies.map((movie) => (
                    <Card className="card-item" key={movie.id}>
                        <Link to={`/Movies/${movie.id}`}>
                            <Card.Img
                                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                                alt={"error"}
                            />
                        </Link>
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>

    );
}

export default MovieCard