import './Navbar.css';
import Navigation from "../Navigation";
import Logo from '../Logo';
import Notifications from "../Notifications";
import Profile from '../Profile';

import { useRef, useState, useEffect } from 'react';

const Navbar = () => {
    const navRef = useRef();

    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        if (scrollPos !== 0){
            navRef.current.classList.add("bg-grey")
        }
        else{
            navRef.current.classList.remove('bg-grey')
        }
    }, [scrollPos])

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setScrollPos(window.scrollY)    
        })
    }, [])

    return (
        <div className='mainNav w-screen min-w-[1400px] h-[68px] fixed z-[100] bg-gradient-to-b from-black to-transparent flex flex-row justify-between items-center text-[1rem]'
            ref={navRef}
        >
            <div className='primaryNav flex items-center relative pl-[4%]'>
                <Logo />
                {/* <Navigation /> */}
            </div>
            <div className='secondaryNav flex items-center pr-[4%]'>
                {/* <Notifications /> */}
                <Profile />
            </div>
        </div>
    )
}

export default Navbar;