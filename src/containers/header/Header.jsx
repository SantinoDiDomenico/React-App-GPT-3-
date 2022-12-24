import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='gp3__header section__padding' id='home'>
            <div className='gp3__header-content'>

                <h1 className='gradient__text'>
                    Let's Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime excepturi quisquam sapiente maiores dolor corporis, magnam veritatis vero est culpa sint nostrum aliquid molestiae ipsum exercitationem dolorem illo architecto nemo rerum necessitatibus soluta repellendus. Neque?
                </p>

                <div className='gp3__header-content__input'>
                    <input type="email" placeholder='Your email Adress' />
                    <button type='button'>Get Started</button>
                </div>

                <div className='gp3__header-content__people'>
                    <img src={people} alt="people" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vero!</p>
                </div>
            </div>
            <div className='gp3__header-image'>
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
};

export default Header;