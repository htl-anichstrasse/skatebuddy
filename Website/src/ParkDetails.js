import { useParams } from "react-router";

const ParkDetails =() =>{

    const {id} = useParams();
    return(
        <h2>{id}</h2>
    );
}

export default ParkDetails;