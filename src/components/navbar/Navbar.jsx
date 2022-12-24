import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import Logo from '../../assets/logo.svg'

const Menu = () => (
    <>
        <p><a href="wpg3">What is GPT3?</a></p>
        <p><a href="posibility">Open AI</a></p>
        <p><a href="features">Case Studies</a></p>
        <p><a href="blog">Libraries</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <div className='gp3__navbar'>
            <div className='gp3__navbar-links'>
                <div className='gp3__navbar-links_logo'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='gp3__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='gp3__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='gp3__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='gp3__navbar-menu_container scale-up-center'>
                        
                        <div className='gp3__navbar-menu_container-links'>
                        <Menu />
                        </div>

                        <div className='gp3__navbar-menu_container-links-sign'>
                            <p>Sign in</p>
                            <button type='button'>Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar