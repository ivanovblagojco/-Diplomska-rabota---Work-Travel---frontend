import axios from './axios'
import AuthenticationService from "./authentication";

const AxiosService = {
    addNewPost: (postHelper) => {
        const data = {
            ...postHelper
        }
        const formParams = JSON.stringify(data);
        debugger;
        return axios.post("/rest/createPost",formParams, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
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
export default AxiosService;
