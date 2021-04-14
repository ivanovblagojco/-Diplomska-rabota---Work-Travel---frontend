import axios from './axios'
import axiosNA from 'axios'

const CommentService = {
    createComment: (commentHelperFront) => {

        const formParams = JSON.stringify(commentHelperFront);
        return axios.post("/rest/createComment",formParams, {
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
    deleteComment: (id) => {

        return axios.delete(`/rest/deleteComment/${id}`,null, {
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
    getAllComments: (page, size, post_id) => {

        //const formParams = JSON.stringify(data);
        return axiosNA.get(`/rest/getAllComments/${page}/${size}/${post_id}`,null,{
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
export default CommentService;