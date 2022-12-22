import React from 'react'

import { Footer, Blog, Posibility, Features, WhatGP3, Header } from './containers';
import { Cta, Brand, Navbar } from './components';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand />
            <WhatGP3 />
            <Features />
            <Posibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App