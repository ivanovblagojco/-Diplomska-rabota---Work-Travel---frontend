import axios from './axios'

const UserService = {
    getLoggedUser: () => {

        //const formParams = JSON.stringify(data);
        return axios.get("/rest/getLoggedUser", null, {
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
export default UserService;