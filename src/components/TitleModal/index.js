import TitleRating from '../TitleRating';
import './TitleModal.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../../store/modalReducer';

const TitleModal = ({}) => {
    const [genres, setGenres] = useState([]);

    const modalState = useSelector(state => state.modalState);
    const dispatch = useDispatch();
    let highlightedTitle, imageURL, tvGenres, movieGenres;

    const handleInfoClose = (e) => {
        dispatch(hideModal())
    }

    useEffect(() => {
        if (highlightedTitle){
            let media = highlightedTitle.media_type === 'movie' ? movieGenres : tvGenres
            let tempGenres = [];
            for (let i = 0; i < media.length; i += 1) {
                let genre = media[i];
                for (let j = 0; j < highlightedTitle.genre_ids.length; j += 1) {
                    if (genre.id === highlightedTitle.genre_ids[j]) {
                        tempGenres.push(genre.name)
                    }
                }
            }
            setGenres(tempGenres.join(', '))
        }
    }, [modalState])

    if (modalState.info){
        highlightedTitle = modalState.info.highlightedTitle
        imageURL = modalState.info.pictureLink
        tvGenres = modalState.info.tvGenres
        movieGenres = modalState.info.movieGenres

        
        const searchParam = (highlightedTitle.title || highlightedTitle.name || '')
            .split(' ')
            .join('+')
        return (
            <div className='titleModal relative rounded bg-grey h-[90vh] w-[50vw] min-w-[700px]'>
                <div className='modalImageWrapper relative'>
                    <img className={`backgroundImage rounded`} alt='background' src={imageURL} />
                    <div className='title absolute top-[60%] left-[4%] z-[1] font-[1.2em]'>
                        <div className={`text-white text-[1.8em]`}>
                            {highlightedTitle.title || highlightedTitle.name}
                        </div>
                    </div>
                    <div className='absolute z-[2] top-[75%] right-0'>
                        <TitleRating highlightedTitle={highlightedTitle} />
                    </div>
                    <div className='closeButton absolute right-[4%] top-[4%] h-[25px] w-[25px] rounded-full flex items-center justify-center'
                        onClick={e => handleInfoClose(e)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512">
                            <path fill="#ffffff" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                        </svg>
                    </div>
                </div>
                <div className='pl-[4%] text-white font-[1em] relative flex flex-col'>
                    <div className='descriptor pb-[5%]'>
                        <span className={`descriptionTitle`}>Genres: </span>
                        <span>{genres}</span>
                    </div>
                    <div className='absolute right-[0] top-[0] pr-[4%] descriptor'>
                        <span className='descriptionTitle'>Original Language: </span>
                        <span>{highlightedTitle.original_language.toUpperCase()}</span>
                    </div>
                    <div className='pb-[5%] pr-[4%]'>
                        {highlightedTitle.overview}
                    </div>
                    <div className=''>
                        <a className={`text-white link opacity-[.7]`} href={`https://www.google.com/search?q=${searchParam}&oq=${searchParam}`} target='_blank'>
                            Check out more here...
                        </a>
                    </div>
                </div>
            </div>
        )
    }   
}

export default TitleModal;