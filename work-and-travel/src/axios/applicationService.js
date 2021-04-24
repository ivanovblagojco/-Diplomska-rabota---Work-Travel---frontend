import axios from './axios'
import axiosNA from 'axios'

const applicationService={
    createApplication: (applicationHelper) => {

        const formParams = JSON.stringify(applicationHelper);
        return axiosNA.post("/rest/createApplication",formParams, {
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

export default applicationService;