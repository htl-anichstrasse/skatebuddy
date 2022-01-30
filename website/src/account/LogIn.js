import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import './LogIn.css';

async function loginUser(information) {
 return fetch('https://skate-buddy.josholaus.com/api/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(information)
 })
   .then(data => data.json())
}

export default function LogIn({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
       password
    });
    setToken(token);
    navigate("/");
    window.location.reload(false);
  }

  return(
    <div className="login-form">
      <div className="login-in-box">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p className='input-header'>Username</p>
            <input className="input" type="text" onChange={e => setUserName(e.target.value)} />
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

LogIn.propTypes = {
  setToken: PropTypes.func.isRequired
};