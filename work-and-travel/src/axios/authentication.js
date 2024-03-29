import axios from 'axios'
import axiosA from'./axios'

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
                return res;
             }
        )
            .catch(
            err => {
                console.log(err);
            }
        );
    },
    updateUser: (user) => {
        const data = {
            ...user
        }
        console.log(user)
        const formParams = JSON.stringify(data);
        return axiosA.put("http://localhost:8080/rest/userUpdateUser",formParams, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }).then(res =>{
                return res;
            }
        )
            .catch(
                err => {
                    console.log(err);
                }
            );
    },
    userChangesPassword: (email, oldPassword, newPassword) => {
        debugger;

        return axiosA.put("http://localhost:8080/rest/userChangesPassword",null, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'email':email,
                'oldPassword':oldPassword,
                'newPassword':newPassword

            }
        }).then(res =>{
            return res;            
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
            return res;

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
    },
    facebookLogin: (facebookLoginRequest) => {
        const data = {
            ...facebookLoginRequest
        }
        //const formParams = JSON.stringify(data);
        return axios.post("http://localhost:8080/facebook/signin",null, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'auth_token' : facebookLoginRequest.accessToken
            }
        })
            .catch(
                err => {
                    console.log(err);
                }
            );
    },
    ForgotPassword: (email) => {
        return axios.post("http://localhost:8080/rest/forgot_password",null, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'email': email
            }
        }).then(res =>{
            }
        )
            .catch(
                err => {
                    console.log(err);
                }
            );
    },
    ResetPassword: (password, token) => {
        return axios.post("http://localhost:8080/rest/reset_password",null, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'password': password,
                'token':token
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
    }
}

export default AuthenticationService;
