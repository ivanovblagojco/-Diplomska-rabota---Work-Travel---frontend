import axios from './axios'
import axiosNA from 'axios'
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
    deletePost: (id) => {

        return axios.delete(`/rest/deletePost/${id}`,null, {
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
    getAllPosts: (place,page,size) => {
        debugger;
        if(place==="Америка" || place==="Германија" || place==="Балкан" || place==="Останато"){
            return axiosNA.get(`/rest/getAllPosts/${place}/${page}/${size}`, null, {
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
        
        }else{
            return axiosNA.get(`/rest/getAllPosts/${page}/${size}`, null, {
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
    },
    getPost: (id) => {

        return axiosNA.get(`/rest/getPost/${id}`, null, {
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
        return axiosNA.get("/rest/getLastThreePosts", null, {
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
    getAllPostsFromUsers: (place,page, size) => {

        if(place==="Америка" || place==="Германија" || place==="Балкан" || place==="Останато"){
            return axiosNA.get(`/rest/getAllPostsFromUsers/${place}/${page}/${size}`, null, {
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
        }else{
            return axiosNA.get(`/rest/getAllPostsFromUsers/${page}/${size}`, null, {
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
    },
    getAllPostsFromAgency: (place, page, size) => {

        if(place==="Америка" || place==="Германија" || place==="Балкан" || place==="Останато"){
            return axiosNA.get(`/rest/getAllPostsFromAgency/${place}/${page}/${size}`, null, {
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
        }else{
            return axiosNA.get(`/rest/getAllPostsFromAgency/${page}/${size}`, null, {
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
    },
    getLoggedUserPosts: (page, size) => {
        return axios.get(`/rest/getLoggedUserPosts/${page}/${size}`, null, {
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
