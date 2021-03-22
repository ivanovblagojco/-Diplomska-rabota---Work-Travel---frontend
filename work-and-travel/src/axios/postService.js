import axios from './axios'

const PostService = {
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
    },
    getLastThreePosts: () => {

        //const formParams = JSON.stringify(data);
        return axios.get("/rest/getLastThreePosts", null, {
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
    getAllPostsFromUsers: () => {

        //const formParams = JSON.stringify(data);
        return axios.get("/rest/getAllPostsFromUsers", null, {
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
    getAllPostsFromAgency: () => {

        //const formParams = JSON.stringify(data);
        return axios.get("/rest/getAllPostsFromAgency", null, {
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
export default PostService;
