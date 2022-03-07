import useFetch from "../../hooks/UseFetch";
import Error from "../../staticViews/Error";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Recommendationlist.css";

const Recommendations = () => {

   const navigate = useNavigate();

   useEffect(() => {
    if(!sessionStorage.getItem("data")){
      navigate("/LogIn");
      return;
    }
    if((JSON.parse(sessionStorage.getItem("data")).admin) !== 1){
          navigate("/");
    }
  });

    const {
        data: Recommendation,
        isPending,
        error,
      } = useFetch('https://skate-buddy.josholaus.com/api/suggestions');

      const removeRecommendFromList = value =>  async e =>{
        console.log(value)
        e.preventDefault();
        await fetch(
          "https://skate-buddy.josholaus.com/api/suggestions/"+value,{
            method:'DELETE'
          }
        ).then(() => {
          window.location.reload();
        })
      }

      const changeRecommend = value => e => {
          sessionStorage.setItem("recommendation", JSON.stringify(value))
          navigate("/AddPark")
      }

    return(
        <>
        {isPending && 
        <h2>Loading</h2>
        }
       {error &&  
        <Error/>
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
                                <td className="button-td"><button type="button" name={recommend.id} onClick={removeRecommendFromList(recommend.skateparkId)} className="remove-recommend-from-list">Entfernen</button><button type="button" name={recommend.id} onClick={changeRecommend(recommend)} className="remove-recommend-from-list">Ändern und hinzufügen</button></td>
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