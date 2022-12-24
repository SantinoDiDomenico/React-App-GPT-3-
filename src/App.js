import React from "react";
import './App.css'

import {
    Footer,
    Blog,
    Posibility,
    Features,
    WhatGP3,
    Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <div>
                <Brand />
                <WhatGP3 />
                <Features />
                <Posibility />
                <Blog />
                <Footer />
                <Cta />
            </div>
        </div>
    );
};

export default App;
