import React, { useState } from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import DropButton from '../../UI/DropButton';
import Header from '../../UI/Header';

export default function Form(props) {

    const [movie, setMovie] = useState('');
    const [urgency, setUrgency] = useState('');
    const [isValid, setIsValid] = useState(true);


    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (movie.trim().length === 0) {
            setIsValid(false);
            return;
        } else if (urgency.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddPick(movie, urgency)
        setMovie('');
        setUrgency('');
    }

    const movieInputHandler = (event) => {
        setMovie(event.target.value)
    }

    const urgencyInputHandler = (event) => {
        setUrgency(event.target.value)
    }


    return (
        <Card>
            <DropButton></DropButton>
            <Header></Header>
            <div value={isValid}>
                <form className="space-y-6" onSubmit={formSubmitHandler}>
                    <label className='font-righteous block text-lg mb-2 font-medium text-gray-900 dark:text-white'>Movie</label>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                        placeholder='Add a Movie'
                        id="movie"
                        onChange={movieInputHandler}
                        type="text"
                        value={movie}></input>
                    <label className='font-righteous block text-lg mb-2 font-medium text-gray-900 dark:text-white'>Urgence</label>
                    <select
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                        id="urgency"
                        onChange={urgencyInputHandler}
                        type="text"
                        value={urgency}>
                        <option value="" disabled selected hidden>Choose Urgence</option>
                        <option value="Must Watch">Must Watch</option>
                        <option value="Interested">Interested</option>
                        <option value="Maybe">Maybe</option>
                    </select>
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        </Card>
    )
}
