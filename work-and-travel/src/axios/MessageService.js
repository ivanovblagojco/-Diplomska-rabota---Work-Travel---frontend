import axios from './axios'
const MessageService = {
    createMessage: (messageHelper) => {

        const formParams = JSON.stringify(messageHelper);
        return axios.post("/rest/createMessage", formParams, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }).then(res => {
                return res;
            }
        )
            .catch(
                err => {
                    console.log(err);
                }
            );
    },
    getConversationForLoggedUser: () => {

        //const formParams = JSON.stringify(data);
        return axios.get('/rest/getConversationsForLoggedUser',null,{
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
export default MessageService;