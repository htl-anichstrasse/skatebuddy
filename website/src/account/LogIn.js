import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AuthService from './Auth/auth-service';
import './LogIn.css';


export default function LogIn({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();


  const handleSubmit = async e => {
    AuthService.login(email, password).then(
      () => {
        if(JSON.parse(localStorage.getItem("user")).success){
          navigate("/");
          window.location.reload(true);
        }else{
          console.log("Ne")
        }
      },
      error => {
        console.log("Nope")
      }
    );
  }

  return(
    <div className="login-form">
      <div className="login-in-box">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p className='input-header'>Email</p>
            <input className="input" type="Email" onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            <p className='input-header'>Password</p>
            <input className="input" type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}