import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { showModal } from "../../../store/modalReducer";
import './PreviewBanner.css';
import '../../TitleModal'
import TitleModal from "../../TitleModal";
import TitleRating from '../../TitleRating';

const PreviewBanner = ({trending, movieGenres, tvGenres}) => {
    const [idx, setIdx] = useState(Math.floor((Math.random() * 20)));
    const [highlightedTitle, setHighlightedTitle] = useState(trending[idx]);
    const [pictureLink, setPictureLink] = useState(`https://image.tmdb.org/t/p/original${trending[idx].backdrop_path}`);

    const dispatch = useDispatch();

    const handleInfoClick = (e) => {
        dispatch(showModal({
            highlightedTitle: highlightedTitle,
            pictureLink: pictureLink,
            tvGenres: tvGenres,
            movieGenres: movieGenres
        }))
    }

    return (
        <div className='w-[100vw] min-w-[1400px]'>
            {highlightedTitle && (
                <div className='relative'>
                    <div className='preview z-[2] flex flex-col justify-center absolute left-[4%] top-[10%] max-w-[50%] min-w-[50%]'>
                        <div className='previewTitle text-white text-[3em]'>
                            {highlightedTitle.title || highlightedTitle.name}
                        </div>
                        <div className={`previewDescription text-[#fafafa] text-[1em] ${highlightedTitle.overview.length < 250 ? 'max-w-[80%] min-w-[80%]' : 'max-w-[110%] min-w-[110%]'}`}>
                            {highlightedTitle.overview}
                        </div>
                        <div className='infoButton w-[150px] h-[40px] rounded text-white flex justify-center items-center' onClick={(e) => handleInfoClick(e)}>
                            <div className='flex flex-row text-[1.3] font-[600]'>
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill='rgb(255,255,255)'></path></svg>
                                <span className='pl-[10px]'>More Info</span>
                            </div>
                        </div>
                        <div className={``}>
                            <TitleRating highlightedTitle={highlightedTitle} />
                        </div>
                    </div>
                    <div className='previewImageWrapper'>
                        <img src={pictureLink} alt='backDrop' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default PreviewBanner;