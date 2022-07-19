import React, { useContext, useState } from 'react'
import { MovieContext } from './MovieContext'

const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieContext)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const id = new Date().getMilliseconds() + name;

    const addMovie = (e) => {
        e.preventDefault();
        setMovies([...movies, {name: name, price: price, id: id}])
        // setMovies(previousMovies => [...previousMovies, {name: name, price: price, id: id}])
    }

  return (
    <>
        <form onSubmit={addMovie}>
            <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter movie name' />
            <input type='text' name='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter movie price' />
            <button type='submit'>Add Movie</button>
        </form>
    </>
  )
}

export default AddMovie