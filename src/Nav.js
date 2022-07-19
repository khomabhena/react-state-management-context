import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'
import { MovieLength, Name, NavWrapper } from './NavElements'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)

  return (
    <NavWrapper>
        <Name>Kho Mabhena</Name>
        <MovieLength>List of movies: {movies.length}</MovieLength>
    </NavWrapper>
  )
}

export default Nav