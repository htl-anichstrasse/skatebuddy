import useFetch from '../hooks/UseFetch';
import raw from './Key.txt';
import React, { useState } from 'react';

const Times = () =>{

    // eslint-disable-next-line
    const [UserLangitude, setUserLangitude] = useState(null);
    // eslint-disable-next-line
    const [UserLongitude, setUserLongitude] = useState(null);
    const [Keys, setKeys] = useState(null);
        
    fetch(raw)
    .then(r => r.text())
    .then(text => {
        setKeys(text);
        });

    navigator.geolocation.getCurrentPosition(function(position) {
        setUserLangitude(position.coords.latitude);
        setUserLongitude(position.coords.longitude);
    });

    const {
        data: park,
        // eslint-disable-next-line
        isPending,
        // eslint-disable-next-line
        error,
      } = useFetch('https://maps.googleapis.com/maps/api/directions/json?origin=41,41&destination=40,40&mode=walking&key='+Keys);


    return(
        <>
        <h2>Hi</h2>
            {console.log(park)}

        </>
    )
    
}
export default Times;