import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Table } from 'react-bootstrap';
import '../InfoMovie.css'

const InfoMovie = () => {
    let { id } = useParams();
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=737e03835100ab33e61e34415c05c60b&language=en-US`)
            .then((response) => setmovie(response.data))
    }, [])
    console.log(movie);
    console.log(movie.homepage);
    return (
        <div>
            <div>
                <br></br><br></br>
                <center><h1>{movie.title}</h1></center>
                <img className='img-post' src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} />
                <Table className='Table-info' striped>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{movie.title}</td>
                            <td>{movie.overview}</td>
                            <td><h3 style={{ color: "green" }}>{movie.budget} $</h3></td>
                        </tr>
                    </tbody>
                </Table>
                <Table className='Table-info2' striped>
                    <thead>
                        <tr>
                            <th>Satut</th>
                            <th>release date</th>
                            <th>tagline</th>
                            <th>Rating</th>
                            <th>popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{movie.status}</td>
                            <td>{movie.release_date}</td>
                            <td>{movie.tagline}</td>
                            <td>{movie.vote_average}/10</td>
                            <td>{movie.popularity}</td>
                        </tr>
                    </tbody>
                </Table>
                <Link to={movie.homepage} ><button className='btn btn-success show-movie'>Watch Movie</button></Link>
            </div>
        </div>
    )
}

export default InfoMovie