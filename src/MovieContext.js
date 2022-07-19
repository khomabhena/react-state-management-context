import React, { createContext, useState } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 21452
        },
        {
            name: 'Game of Thrones',
            price: '$12',
            id: 2145254
        },
        {
            name: 'Troy',
            price: '$15',
            id: 2145214785
        }
    ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
    </MovieContext.Provider>
  );
}

// export default MovieContext