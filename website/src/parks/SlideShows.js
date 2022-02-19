import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './SlideShows.css'


const Slideshow = (parkpics) => {
    return (
      <div className="slide-container">
        <Slide autoplay={false} transitionDuration={420}>
         {parkpics.parkpics.map(pic=> (
            <div className="each-slide" key={pic.skateparkId}>
              <div style={{'backgroundImage': `url(https://skate-buddy.josholaus.com/api/skateparkpictures/${pic.skateparkId}/${pic.picId})` }} className='bg'>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;