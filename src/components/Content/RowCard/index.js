import { useEffect, useRef, useState } from "react";
import { useDispatch } from 'react-redux';

import './RowCard.css';
import { showModal } from "../../../store/modalReducer";

const RowCard = ({data, tvGenres, movieGenres}) => {
    const imageRef = useRef();

    const [imageURL, setImageURL] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            setImageURL(`https://image.tmdb.org/t/p/original${data.poster_path}`)
        }
    }, [data])

    const handleInfoClick = (e) => {
        dispatch(showModal({
            highlightedTitle: data,
            pictureLink: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
            tvGenres: tvGenres,
            movieGenres: movieGenres
        }))
    }
    
    return (
        <div 
            className={`rowCard h-[99.5%] min-w-[16.67%] relative`}
        >
            <img 
                ref={imageRef}
                className='cardImage rounded h-[100%]' 
                onMouseEnter={e => {
                    imageRef.current.style.transform = 'translateX(20px)'
                    e.target.style.cursor = 'pointer'
                }}
                onMouseLeave={e => imageRef.current.style.transform = 'translateX(0)'} 
                onClick={(e) => handleInfoClick(e)}
                src={imageURL} 
                alt={data.name || data.title}
            />
        </div>
    )
}

// 2.5% 4% 93.5% / 5

export default RowCard;