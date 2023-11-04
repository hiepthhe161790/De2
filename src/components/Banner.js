import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './banner.css'

const fadeImages = [
    {
        url: '../images/slide_1.png',
        caption: 'Slide 1'
    },
    {
        url: '../images/slide_2.png',
        caption: 'Sldie 2'
    },
    {
        url: '../images/slide_3.png',
        caption: 'Slide 3'
    },
];


const Banner = () => {
    return (
        <Fade>
            {fadeImages.map((fadeImage, index) => (
                <div className="each-fade" key={index} >
                    <img src={fadeImage.url} />
                </div>
            ))
            }
        </Fade>
    );
}
export default Banner;