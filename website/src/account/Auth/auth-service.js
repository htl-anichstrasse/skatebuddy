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
            console.log(response)
            localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
    window.location.reload(false);
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  decodeToken(){
  }
}

export default new AuthService();