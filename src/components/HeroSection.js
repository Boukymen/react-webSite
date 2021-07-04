import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'
function HeroSection() {
    return (
        <div className="hero-container">
            <video src={'/videos/video-1.mp4'} autoPlay loop muted />
            <h1>AVENTURE UNIQUE</h1>
            <p>On attend que vous !!</p>
            <div className="hero-btns">
                <Button 
                className="btns" 
                Link_i="/sign-up"
                buttonStyle='btn--outline' 
                button_size='btn--large'>
                    GET STARTED
                </Button>
                <Button 
                className="btns" 
                buttonStyle='btn--primary'
                Link_i="/trailler"
                button_size='btn--large'>
                    WATCH TRILLER <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
