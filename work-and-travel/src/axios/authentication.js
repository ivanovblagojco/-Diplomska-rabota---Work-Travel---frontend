import axios from 'axios'
import qs from 'qs'

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
        }).catch(
            err => {
                console.log(err);
            }
        );
    }
}

export default AuthenticationService;
