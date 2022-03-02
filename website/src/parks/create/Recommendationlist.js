//import useFetch from "../../hooks/UseFetch";
//import Error from "../../staticViews/Error";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Recommendationlist.css";

const Recommendation = [
    {
        "id": 1,
        "name": "Skatepark Rum Sane Plaza",
        "address":"",
        "busstop":"",
        "latitude": "47.268467",
        "longitude": "11.447938",
        "obstacles": [

        ]
      },
      {
        "id": 2,
        "name": "Skatepark Tivoli",
        "address":"",
        "busstop":"",
        "latitude": 47.2587839,
        "longitude": 11.4075082,
        "obstacles": [

        ]
      },
      {
        "id": 3,
        "name": "Skatepark Schwaz",
        "address":"",
        "busstop":"",
        "latitude": 47.356132953928274,
        "longitude": 11.715198837273547,
        "obstacles": [

        ]
      },
      {
        "id": 4,
        "name": "Skatepark Mayrhofen",
        "address":"",
        "busstop":"",
        "latitude": 47.16365156720211,
        "longitude": 11.868889701765916,
        "obstacles": [

        ]
      }
]

const Recommendations = () => {

   const navigate = useNavigate();

   // const {
     //   data: Recommendation,
      //  isPending,
        //eslint-disable-next-line
      //  error,
     // } = useFetch('');

      const removeRecommendFromList = value =>  async e =>{
        e.preventDefault();
        await fetch(
          ""+value,{
            method:'DELETE'
          }
        )
        window.location.reload(true);
      }

      const changeRecommend = value => e => {
          sessionStorage.setItem("recommendation", JSON.stringify(value))
          navigate("/AddPark")
      }

    return(
        <>
        {//isPending && 
        //<h2>Loading</h2>
        }
       {//error &&  
        //<Error/>
        }
        {Recommendation && 
        <div className="Recommendations-list">
            <table className="recommend-table">
                <thead>
                <tr>
                    <th>Park Name</th>
                    <th className="remove-recommend">Hinderniss entfernen</th>
                </tr>
                </thead>
                <tbody>
                {Recommendation.map(recommend => (
                            <tr key={recommend.id}>
                                <td>{recommend.name}</td>
                                <td className="button-td"><button type="button" name={recommend.id} onClick={removeRecommendFromList(recommend.id)} className="remove-recommend-from-list">Entfernen</button><button type="button" name={recommend.id} onClick={changeRecommend(recommend)} className="remove-recommend-from-list">Ändern</button></td>
                            </tr>
                ))}
                </tbody>
            </table>

        </div>
        }
        <div className="Create-own-park">
            <Link to="/AddPark">
            <button type="button" className="create-own-park-button">Eigenen Park erstellen</button>
            </Link>
        </div>
        </>
    )
}

export default Recommendations;