import React, { useState, useEffect } from 'react'
import Button from '../../UI/Button';
// import axios from 'axios';

export default function MovieApi(props) {

    const [movieSearchInput, setMovieSearchInput] = useState();

    // const input = "dog"

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '171a179fffmshee0dd46533af305p1c57bbjsn26cb43cb20f8',
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    // fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${movieSearchInput}&r=json`, options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    //     // setMovieSearchInput('');

    //     const ApiFormSubmitHandler = (event) => {
    //         event.preventDefault();
    //         setMovieSearchInput(event.target.value)
    //         console.log(setMovieSearchInput)
    //     }

    useEffect(() => {
        fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${movieSearchInput}&r=json`, options)
            .then(response => response.json())
            .then(response => {
                setMovieSearchInput(response.movieSearchInput)
                console.log(setMovieSearchInput)
            })
            .catch(err => console.error(err));
    }, [setMovieSearchInput])


    const ApiFormSubmitHandler = (event) => {
        event.preventDefault();
        setMovieSearchInput(event.target.value)
        console.log(setMovieSearchInput)
    }






    return (
        <div>
            <form onSubmit={ApiFormSubmitHandler} >
                <input
                    value={movieSearchInput}
                    // onChange={(event) => setMovieSearchInput(event.target.value)}
                    placeholder='Search for Movies'
                    type='text'
                >
                </input>
                <Button type='submit'>Search</Button>
            </form>
        </div>
    )
}


   // const [movies, setMovies] = useState([]);
    // const [randomMovie, setRandomMovie] = useState("");

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch("https://movie-database-alternative.p.rapidapi.com/?s=%3CREQUIRED%3E&r=json&page=1");
    //         console.log(response)
    //         const data = await response.json();
    //         console.log(data)

    //         setMovies(data);
    //         let randomIndex = Math.floor(Math.random() * data.length);
    //         setRandomMovie(data[randomIndex])

    //     }
    //     fetchData()
    // }, [])


    // const apik = '171a179fffmshee0dd46533af305p1c57bbjsn26cb43cb20f8'

    // useEffect(() => {
    //     axios.get('https://movie-database-alternative.p.rapidapi.com/?s=%3CREQUIRED%3E&r=json&page='+apik)
    //     .then(res => {
    //         console.log(res.data)
    //         setMovies(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },[])