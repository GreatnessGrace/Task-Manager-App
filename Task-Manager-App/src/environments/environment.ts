const API_URL = "http://localhost:4000";

export const environment = {
    production: false,
    
    signup: API_URL + "/users/signup",
    login: API_URL + "/users/login"
}