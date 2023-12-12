import { useRef, useEffect, useState } from 'react';

import RowCard from '../RowCard';
import './Row.css'

const Row = ({genreName, genreData}) => {
    const sliderRef = useRef();

    if (genreName){
        return (
            <div className='bg-transparent h-[25vh] w-[100%] mb-[10px] text-white flex flex-col'>
                <div className='rowTitle pb-[10px]'>
                    {genreName}
                </div>
                <div ref={sliderRef} className="slider flex flex-row w-[100%] h-[75%] overflow-hidden">
                    {
                        genreData.map((data) => {
                            return (
                                <RowCard key={data.id} data={data}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
}

export default Row;