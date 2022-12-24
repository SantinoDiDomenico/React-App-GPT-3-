import React from 'react'
import { Feature } from '../../components'
import './whatGP3.css'

const WhatGP3 = () => {
    return (
        <div className='gp3__whatgp3 section__margin' id='wpg3'>
            <div className='gp3__whatgp3-feature'>
                <Feature/>  
            </div>
            <div className='gp3_whatgp3-heading'>
                <h1 className='gradient-text'> Your Posibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className='gp3__whatgp3-container'>
                <Feature/>
                <Feature/>
                <Feature/>

            </div>

        </div>
    )
}

export default WhatGP3