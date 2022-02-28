import useFetch from "../../hooks/UseFetch";
import Error from "../../staticViews/Error";
import { Link } from "react-router-dom";
import "./AddPark.css";

const Recommendations = () => {

    const {
        data: Recommendations,
        isPending,
        error,
      } = useFetch('');

    return(
        <>
        {isPending && 
        <h2>Loading</h2>
        }
        {error && 
        <Error/>
        }
        {Recommendations && 
        <div className="Recommendations-list">


        </div>
        }
        <Link to="/AddPark" className="Create-own-park">
            Eigenen Park erstellen
        </Link>
        </>
    )
}

export default Recommendations;