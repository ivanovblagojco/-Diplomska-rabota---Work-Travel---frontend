import axios from './axios'
import axiosNA from 'axios'

const ContactService = {
    createContact: (contact) => {

        const formParams = JSON.stringify(contact);
        return axios.post("/rest/createContact",formParams, {
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
    getAllContacts: (page, size) => {
        debugger;
        return axios.get(`/rest/getAllContacts/${page}/${size}`,null,{
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
export default ContactService;