import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './SlideShows.css'

const slideImages = [
  {
    url: 'https://www.visitcalifornia.com/sites/visitcalifornia.com/files/VC_Skateparks_MagdalenaEckeYMCA_Supplied_IMG_5676_RT_1280x640.jpg',
  },
  {
    url: 'https://www.como.gov/wp-content/uploads/elementor/thumbs/DSCF4782-e1518554322769-1-scaled-p2br1riobzmz7s8p6f7qtodjyc4sii7euehbbenhwg.jpg',
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide autoplay={false} transitionDuration={420}>
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