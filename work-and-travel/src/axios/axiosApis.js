import axios from './axios'
import AuthenticationService from "./authentication";

const AxiosService = {
    addNewPost: (formData) => {

        //const formParams = JSON.stringify(data);
        return axios.post("/rest/createPost",formData, {
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
    },
    getAllPosts: () => {

        //const formParams = JSON.stringify(data);
        return axios.get("/rest/getAllPosts", null, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }).then(res =>{
                return res.data;
            }
        )
            .catch(
                err => {
                    return null;
                }
            );
    },
    getPost: (id) => {

        return axios.get(`rest/getPost/${id}`, null, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }).then(res =>{
                return res.data;
            }
        )
            .catch(
                err => {
                    return null;
                }
            );
    }
}
export default AxiosService;
