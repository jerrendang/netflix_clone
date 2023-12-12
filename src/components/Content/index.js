import PreviewBanner from './PreviewBanner';
import TitleRows from './TitleRows';
import Loading from './Loading';

import { useState, useEffect } from 'react';

const Content = ({titleType = 'all'}) => {
    const trendingURL = `https://api.themoviedb.org/3/trending/${titleType}/day?language=en-US&include_video=true`;

    const tvGenreURL = 'https://api.themoviedb.org/3/genre/tv/list?language=en';
    const movieGenreURL = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

    const topMoviesURL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const topTvURL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
    const newMoviesURL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc';
    const newTvURL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_AUTH}`
        }
    }

    const [tvGenres, setTvGenres] = useState();
    const [movieGenres, setMoviesGenres] = useState();

    const [genres, setGenres] = useState();

    const [trending, setTrending] = useState();
    const [topMovies, setTopMovies] = useState();
    const [topTv, setTopTv] = useState();
    const [newMovies, setNewMovies] = useState();
    const [newTv, setNewTv] = useState();

    const initialFetch = async () => {
        // fetching for preview
        await fetch(trendingURL, options)
            .then(res => res.json())
            .then(data => setTrending(data.results))
            .catch(err => console.log(err));

        // fetching for genres
        await fetch(movieGenreURL, options)
            .then(res => res.json())
            .then(data => setMoviesGenres(data.genres))
            .catch(err => console.log(err));
        await fetch(tvGenreURL, options)
            .then(res => res.json())
            .then(data => setTvGenres(data.genres))
            .catch(err => console.log(err));

        // fetching for rows
        await fetch(topMoviesURL, options)
            .then(res => res.json())
            .then(data => setTopMovies(data.results))
            .catch(err => console.log(err));
        await fetch(topTvURL, options)
            .then(res => res.json())
            .then(data => setTopTv(data.results))
            .catch(err => console.log(err));
        await fetch(newMoviesURL, options)
            .then(res => res.json())
            .then(data => setNewMovies(data.results))
            .catch(err => console.log(err));
        await fetch(newTvURL, options)
            .then(res => res.json())
            .then(data => setNewTv(data.results))
            .catch(err => console.log(err));
    }

    const secondFetch = async () => {
        if (movieGenres && tvGenres && movieGenres.length > 1 && tvGenres.length > 1) {
            let genreData = {}
            for (let i = 0; i < 15; i += 1) {
                let movieGenreID = movieGenres[i].id;
                let tvGenreID = tvGenres[i].id;

                let tvURL = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${tvGenreID}`;
                let movieURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${movieGenreID}`;

                await fetch(movieURL, options)
                    .then(res => res.json())
                    .then(data => genreData[movieGenres[i].name + ' Movies'] = data.results)
                    .catch(err => console.log(err));
                await fetch(tvURL, options)
                    .then(res => res.json())
                    .then(data => genreData[tvGenres[i].name + ' TV Shows'] = data.results)
                    .catch(err => console.log(err));;
            }
            setGenres(genreData);
        }
    }

    useEffect(() => {
        initialFetch();
    }, [])

    useEffect(() => {
        secondFetch();
    }, [movieGenres, tvGenres])

    return (
        <div className=''>
            {(trending && genres) && (
                <div className='relative'>
                    <PreviewBanner trending={trending}/>
                    <TitleRows 
                        trending={trending} 
                        topMovies={topMovies}
                        topTv={topTv}
                        newMovies={newMovies}
                        newTv={newTv}
                        genres={genres}
                    />
                </div>
            )}
            <div className={!trending ? 'block' : 'hidden'}>
                <Loading />
            </div>
        </div>
    )
}

export default Content;

