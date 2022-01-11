import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './SlideShows.css'

const slideImages = [
  {
    url: 'https://www.fomei.com/ew/ew_images/image?EwImage=cf93f7f4-4421-456c-b7a7-c93d9c5d1a28&Filter=31ebf35d-0c3b-492e-b325-c3c536387844',
  },
  {
    url: 'https://boden.objekt.tarkett.de/media/img/M/TH_3917011_3707003_3708011_3912011_3914011_800_800.jpg',
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide autoplay={false}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}} className='bg'>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;