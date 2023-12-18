import { useRef, useEffect, useState } from 'react';

import RowCard from '../RowCard';
import './Row.css'

const Row = ({genreName, genreData, tvGenres, movieGenres}) => {
    const sliderRef = useRef();

    const [sliderIdx, setSliderIdx] = useState(1);

    const scrollAmount = (window.screen.width * .9202)

    const scrollForward = () => {
        sliderRef.current.scrollLeft += scrollAmount;
        if (sliderIdx < Math.ceil(genreData.length / 6)){
            setSliderIdx(sliderIdx + 1);
        }
    }

    const scrollBackward = () => {
        sliderRef.current.scrollLeft -= scrollAmount;
        if (sliderIdx > 1) {
            setSliderIdx(sliderIdx - 1);
        }
    }

    if (genreName){
        return (
            <div className='bg-transparent h-[50vh] relative w-[100%] text-white flex flex-col overflow-y-visible'>
                <div className='rowTitle pb-[10px] text-[1.2em] ml-[4%]'>
                    {genreName}
                </div>

                <div ref={sliderRef} className="slider flex flex-row w-[100%] pl-[4%] pr-[4%] h-[70%] overflow-x-hidden relative">
                    {
                        genreData.map((data, idx) => {
                            return (
                                <RowCard key={idx} data={data} tvGenres={tvGenres} movieGenres={movieGenres} />
                            )
                        })
                    }
                </div>
                <div className='slideButton backwardSlide' onClick={() => scrollBackward()}>
                    <svg className='hidden' xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 320 512">
                        <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                </div>
                <div className='slideButton forwardSlide' onClick={() => scrollForward()}>
                    <svg className='hidden' xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 320 512">
                        <path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </div>
                <div className='sliderIdxTrack hidden absolute top-0 right-0 flex-row mr-[4%]'>
                    <div className={`indicator ${sliderIdx === 1 ? 'idxSliderActive' : 'idxSliderInactive'}`}></div>
                    <div className={`indicator ${sliderIdx === 2 ? 'idxSliderActive' : 'idxSliderInactive'}`}></div>
                    <div className={`indicator ${sliderIdx === 3 ? 'idxSliderActive' : 'idxSliderInactive'}`}></div>
                    <div className={`indicator ${sliderIdx === 4 ? 'idxSliderActive' : 'idxSliderInactive'}`}></div>
                    <div className={`indicator ${sliderIdx === 5 ? 'idxSliderActive' : 'idxSliderInactive'}`}></div>
                    <div className={`indicator ${sliderIdx === 6 ? 'idxSliderActive' : 'idxSliderInactive'}`}></div>
                    <div className={`indicator ${sliderIdx === 7 ? 'idxSliderActive' : 'idxSliderInactive'}`}></div>
                </div>
            </div>
        )
    }
    
}

export default Row;