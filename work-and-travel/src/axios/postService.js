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
                return res;
            }
        )
            .catch(
                err => {
                    console.log(err);
                }
            );
    },
    getAllPosts: (page,size) => {

        //const formParams = JSON.stringify(data);
        return axios.get(`/rest/getAllPosts/${page}/${size}`, null, {
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
    getAllPostsFromUsers: (page, size) => {

        //const formParams = JSON.stringify(data);
        return axios.get(`/rest/getAllPostsFromUsers/${page}/${size}`, null, {
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
    getAllPostsFromAgency: (page, size) => {

        //const formParams = JSON.stringify(data);
        return axios.get(`/rest/getAllPostsFromAgency/${page}/${size}`, null, {
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
