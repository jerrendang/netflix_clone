import { useState, useEffect } from 'react';
import './TitleRating.css';

const TitleRating = ({highlightedTitle}) => {
    const [isShow, setIsShow] = useState(highlightedTitle.media_type === 'tv');
    const [rating, setRating] = useState();

    const tvRatingURL = `https://api.themoviedb.org/3/tv/${highlightedTitle.id}/content_ratings`;
    const movieRatingURL = `https://api.themoviedb.org/3/movie/${highlightedTitle.id}/release_dates`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_AUTH}`
        }
    }

    const fetchTVRating = async () => {
        return fetch(tvRatingURL, options)
            .then(res => res.json())
            .then(data => data.results)
            .catch(err => console.log(err))
    }

    const fetchMovieRating = async () => {
        return fetch(movieRatingURL, options)
            .then(res => res.json())
            .then(data => data.results)
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (isShow){
            fetchTVRating()
                .then(data => {
                    for (let i = 0; i < data.length; i += 1){
                        if (data[i].iso_3166_1 === 'US' || data[i].iso_3166_1 === 'KR'){
                            let tempRating = data[i].rating
                            setRating('Rated ' + tempRating)
                        }
                    }
                })
        }
        else{
            fetchMovieRating()
                .then(data => {
                    for (let i = data.length - 1; i >= 0; i -= 1){
                        if (data[i].iso_3166_1 === 'US' || data[i].iso_3166_1 === 'KR'){
                            let tempRating = data[i].release_dates[0].certification;
                            setRating('Rated ' + tempRating);
                        }
                    }
                })
        }
    }, [])
    return (
        <div className='titleRating h-[1.5em] w-[6em] bg-[rgba] text-white font-[1em] flex items-center justify-start pl-[4px]'>
            {rating}
        </div>
    )
}

export default TitleRating;
