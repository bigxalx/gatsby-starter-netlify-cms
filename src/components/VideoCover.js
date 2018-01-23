import React from 'react';
import Link from 'gatsby-link';
import BackgroundVideoPreview from '../img/poster.png'
import Mp4BackgroundVideo from '../video/video.mp4'
import Logo from '../img/logo.png'
import DownArrow from '../img/downArrow.svg'


export default () => (
    <div id="home" className="menu white">
        <video playsInline autoPlay muted loop poster={ BackgroundVideoPreview } id="bgvid">
            <source src={Mp4BackgroundVideo + "#t=12"} type="video/mp4"></source>
        </video>

        <div className="videoBackground">
            <img className="logo" src={Logo}></img>
            <h2 className="slogan">Krieg. Stell dir vor er wäre hier</h2>
            <img className="down-arrow" src={DownArrow} />
        </div>
    </div>
);
