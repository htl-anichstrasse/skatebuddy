import AuthService from "./Auth/auth-service";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();
    let name =""
    let email
    let pfpId

    if(sessionStorage.getItem("data")){
         name = JSON.parse(sessionStorage.getItem("data")).name
         email = JSON.parse(sessionStorage.getItem("data")).email
         //eslint-disable-next-line
         pfpId = JSON.parse(sessionStorage.getItem("data")).profilepictureId
    }

    const click = e => {
        e.preventDefault();
        AuthService.logout();
        navigate("/");
        window.location.reload(true);
    }

    return (
        <>
        <div className="User-Details">
        <h1 className="Username">Name: {name}</h1>
        <h1 className="Email">Email: {email}</h1>
        </div>
         <button onClick={click} className='Logout-nav'>
                  LogOut
                </button>
        </>
    )
}

export default Profile;