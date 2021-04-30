import axios from './axios'
import axiosNA from 'axios'

const LikeService = {
    createLikeOrDislike: (like) => {
        

        const formParams = JSON.stringify(like);
        return axios.post("/rest/likeOrDislike",formParams, {
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
    }
}
export default LikeService;

