import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
import './HomeSlideShows.css'

const slideImages = [
  {
    url: 'https://www.visitcalifornia.com/sites/visitcalifornia.com/files/VC_Skateparks_MagdalenaEckeYMCA_Supplied_IMG_5676_RT_1280x640.jpg',
  },
  {
    url: 'https://www.como.gov/wp-content/uploads/elementor/thumbs/DSCF4782-e1518554322769-1-scaled-p2br1riobzmz7s8p6f7qtodjyc4sii7euehbbenhwg.jpg',
  },
];

const HomeSlideshow = () => {
    return (
      <div className="slide-container" id="slideshow-home">
        <Slide autoplay={true} transitionDuration={1000} infinite={true} arrows={false} duration={5000}>
         {slideImages.map((slideImage, index)=> (
            <Link to={`/skateparks/${index+1}`}>
              <div className="each-slide" key={index} id="each-slide-home">
                <div style={{'backgroundImage': `url(${slideImage.url})`}} className='bg' id="bg-home">
                </div>
             </div>
            </Link>
          ))} 
        </Slide>
      </div>
    )
}

export default HomeSlideshow;