import { useEffect, useState } from 'react';

import Row from '../Row';
import './TitleRows.css'

const TitleRows = ({trending, topMovies, topTv, newMovies, newTv, genres, tvGenres, movieGenres}) => {
    // popular on netflix **netflix only has tv shows
    // trending
    // top 10 movies in u.s.
    // top 10 tv shows in u.s.
    // new releases
    // go through the top 30 genres (15 of each) 
    const [genreRows, setGenreRows] = useState();

    useEffect(() => {
        setGenreRows(
            Object.keys(genres).map((genreName) => {
                return (
                    <Row key={genreName} genreName={genreName} genreData={genres[genreName]} tvGenres={tvGenres} movieGenres={movieGenres}/>
                )
            })
        )
    }, [genres])
    

    if (genreRows && genreRows.length > 0){
        return (
            <div className='titleRows bg-gradient-to-top from-grey to-transparent relative'>
                <Row genreName={'Trending'} genreData={trending} tvGenres={tvGenres} movieGenres={movieGenres} />
                <Row genreName={'Top Movies'} genreData={topMovies} tvGenres={tvGenres} movieGenres={movieGenres} />
                <Row genreName={'Top TV Shows'} genreData={topTv} tvGenres={tvGenres} movieGenres={movieGenres} />
                <Row genreName={'New Movies'} genreData={newMovies} tvGenres={tvGenres} movieGenres={movieGenres} />
                <Row genreName={'New TV Shows'} genreData={newTv} tvGenres={tvGenres} movieGenres={movieGenres} />
                {genreRows}
            </div >
        )
    }
}

export default TitleRows;