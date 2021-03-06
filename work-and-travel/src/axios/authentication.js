import axios from 'axios'

const AUTH_TOKEN = 'auth_token';


const AuthenticationService = {
    addNewUser: (user, email, password) => {
        const data = {
            ...user
        }
        const formParams = JSON.stringify(data);
        return axios.post("http://localhost:8080/rest/userCreateUser",formParams, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'email': email,
                'password': password
            }
        }).then(res =>{
            window.location.href = '/login';
             }
        )
            .catch(
            err => {
                console.log(err);
            }
        );
    },
    Login: (email, password) => {
        return axios.post("http://localhost:8080/rest/login", null, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'email': email,
                'password': password
            }
        }).then(res=>{
            localStorage.setItem(AUTH_TOKEN, res.data);
            window.location.href = '/';

        }).catch(
            err => {
                console.log(err);
            }
        );
    },
    CheckIfUserLoggedIn:() =>{
        if(localStorage.getItem(AUTH_TOKEN)!==null){
            return true;
        }else {
            return false;
        }
    }
}

export default AuthenticationService;
