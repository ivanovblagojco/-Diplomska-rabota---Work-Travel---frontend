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
    },
    getAllApplicationsForAgency: (page, size) => {

        //const formParams = JSON.stringify(data);
        return axios.get(`/rest/getAllApplicationsForAgency/${page}/${size}`,null,{
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
    getApplication: (id) => {

        return axios.get(`/rest/getApplication/${id}`, null, {
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

export default applicationService;