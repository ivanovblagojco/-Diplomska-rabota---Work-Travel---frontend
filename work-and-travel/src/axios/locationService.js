import axios from './axios'
import axiosNA from 'axios'

const LocationService = {
    createLocation: (location) => {
        

        const formParams = JSON.stringify(location);
        return axios.post("/rest/createLocation",formParams, {
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
    getAllLocations: (email,page, size) => {
        debugger;
        return axiosNA.get(`/rest/getAllLocations/${email}/${page}/${size}`,null,{
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
export default LocationService;