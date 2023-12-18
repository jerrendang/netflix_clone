import './Navigation.css';

const Navigation = () => {
    return (
        <ul className="text-white flex items-center h-[100%]">
            {/* <li>Browse</li> */}
            <li><a href='#home'>Home</a></li>
            <li><a href='#TV Shows'>TV Shows</a></li>
            <li><a href='#Movies'>Movies</a></li>
        </ul>
    )
}

export default Navigation;