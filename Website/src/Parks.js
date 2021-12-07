import { useState, useEffect } from "react";
import ParkList from "./ParkList";

const Parks = () =>{
    const [skateparks, setPark] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/skateparks')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setPark(data);
            });
    }, []);

    return(
        <div className="ParkList">
           {skateparks && <ParkList skateparks ={skateparks} title="All Parks"/>}
        </div>
    );

}

export default Parks;