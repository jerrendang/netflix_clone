import { useState, useEffect } from "react";
import './PreviewBanner.css'

const PreviewBanner = ({trending}) => {
    const [highlightedTitle, setHighlightedTitle] = useState();
    const [pictureLink, setPictureLink] = useState();

    useEffect(() => {
        if (trending){
            let num = 7
            setHighlightedTitle(trending[num])
            setPictureLink(`https://image.tmdb.org/t/p/original/${trending[num].backdrop_path}`)
        }
    }, [trending])

    return (
        <div className='w-[100vw]'>
            {highlightedTitle && (
                <div className='relative'>
                    <div className='preview z-[2] flex flex-col justify-center absolute left-[4%] top-[25%] max-w-[50%] min-w-[50%]'>
                        <div className='previewTitle text-white text-[3em]'>
                            {highlightedTitle.title || highlightedTitle.name}
                        </div>
                        <div className={`previewDescription text-[#fafafa] text-[1em] ${highlightedTitle.overview.length < 250 ? 'max-w-[80%] min-w-[80%]' : 'max-w-[110%] min-w-[100%]'}`}>
                            {highlightedTitle.overview}
                        </div>
                        <div className='infoButton w-[150px] h-[40px] rounded text-white flex justify-center items-center'>
                            <a href='#titleInfo' className='flex flex-row text-[1.3] font-[600]'>
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill='rgb(255,255,255)'></path></svg>
                                <span className='pl-[10px]'>More Info</span>
                            </a>
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

// https://image.tmdb.org/t/p/original/1X7vow16X7CnCoexXh4H4F2yDJv.jpg

export default PreviewBanner;