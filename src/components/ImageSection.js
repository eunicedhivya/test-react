import React from 'react';
import about from '../img/about.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function ImageSection() {
    return (
        <div className="ImageSection">
            {/* <div className="img">
                <img src={about} alt=""/>
            </div> */}
            <div className="about-info">
                <h4> I am <span>Eunice Dhivya</span></h4>
                <p>As a designer and Front-end developer, am currently working at The Federal. Based at Chennai, Tamil Nadu, India.  I create lead images for the Federal's eighth column section as a designer and develop user Interfaces for Interactives section. Being an data science enthusiast I, acquire and convert data into responsive web-based interactive visualizations and dashboards that tell stories. I also create interactive conversations for brands / Products / Organizations that backedup  with detailed research based analysis and plans.</p>
                <div className="about-details">
                    <a href="#" target="_blank" className="btn">Resume <FontAwesomeIcon icon={faDownload} /></a>
                </div>
            </div>
        </div>
    )
}

export default ImageSection
