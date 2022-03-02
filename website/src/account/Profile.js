import AuthService from "./Auth/auth-service";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './Profile.css'

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

    useEffect(() => {
        if(!sessionStorage.getItem("data")){
            navigate("/LogIn");
        }
      });
    

    return (
        <>
        <div className="userProfile">
        <img src={
            require('./defaultUserProfilePicture1.png').default}
              className="pfp"
              alt="pfp">
            </img>
        <div className="User-Details">
        <h1 className="Username">Name</h1>
        <p className="profile-name">{name}</p>
        <h1 className="Email">Email</h1>
        <p className="profile-email">{email}</p>
        </div>
         <button onClick={click} className='logout-profile'>
                  LogOut
                </button>
        </div>
        </>
    )
}

export default Profile;