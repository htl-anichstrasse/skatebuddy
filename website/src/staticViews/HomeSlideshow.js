import React from 'react';
import { Slide } from 'react-slideshow-image';
import useFetch from '../hooks/UseFetch';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
import './HomeSlideShows.css'


const HomeSlideshow = () => {

  const {
    data: skateparks,
  } = useFetch('https://skate-buddy.josholaus.com/api/skateparks');


    return (
      <>
      {skateparks &&
        <div className="slide-container" id="slideshow-home">
        <Slide autoplay={true} transitionDuration={1000} infinite={true} arrows={false} duration={3000}>
         {skateparks.map(park=> (
            <Link to={`/skateparks/${park.skateparkId}`}>
              <div className="each-slide" key={park} id="each-slide-home">
                <div style={{'backgroundImage': `url(https://skate-buddy.josholaus.com/api/skateparkpictures/${park.skateparkId}/${park.pictureIds[0].picId}`}} className='bg' id="bg-home">
                </div>
             </div>
            </Link>
          ))} 
        </Slide>
      </div>
      }
    </>
    )
}

export default HomeSlideshow;