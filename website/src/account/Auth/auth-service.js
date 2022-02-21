import axios from "axios";

const API_URL = "https://skate-buddy.josholaus.com/api/";

class AuthService {

  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
            localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      });
  }
  logout() {

    localStorage.removeItem("user");
    sessionStorage.removeItem("data")

  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  decodeToken(token){
    fetch(
      'https://skate-buddy.josholaus.com/api/users/decode',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ token: token }),
      },
    ).then(function(response){
      return response.json();
    }).then(function(data) {
      sessionStorage.setItem("data", JSON.stringify(data))      
    })
    }
  }


export default new AuthService();