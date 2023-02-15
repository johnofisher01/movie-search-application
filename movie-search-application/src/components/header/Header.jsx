import React from 'react'
import './Header.css'
import { useScrollTo } from "react-use-window-scroll";

const Header = () => {
    const scrollTo = useScrollTo();
    return (
        <div>
        <span onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })} className='header'>Vision Box</span>
        </div>
    )
}

export default Header
