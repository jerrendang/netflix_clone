import './Navigation.css';

const Navigation = () => {
    return (
        <ul className="text-white flex items-center h-[100%]">
            {/* <li>Browse</li> */}
            <li><a href='#home'>Home</a></li>
            <li><a href='#TV Shows'>TV Shows</a></li>
            <li><a href='#Movies'>Movies</a></li>
            <li><a href='#New & Popular'>New & Popular</a></li>
            <li><a href='#Browse by Languages'></a>Browse By Languages</li>
        </ul>
    )
}

export default Navigation;