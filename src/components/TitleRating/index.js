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
                            switch (tempRating){
                                case 'R':
                                    setRating('Rated R')
                                    break;
                                case '15':
                                    setRating('Rated 15+');
                                    break;
                                case '18':
                                    setRating('Rated 18+');
                                    break;
                                case '12':
                                    setRating('Rated 12+');
                                    break;
                                default:
                                    setRating(tempRating)
                            }
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
                            switch (tempRating) {
                                case 'R':
                                    setRating('Rated R')
                                    break;
                                case '15':
                                    setRating('Rated 15+');
                                    break;
                                case '18':
                                    setRating('Rated 18+');
                                    break;
                                case '12':
                                    setRating('Rated 12+');
                                    break;
                                default:
                                    setRating(tempRating)
                            }
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
