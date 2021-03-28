import {Component} from "react";
import "../css/messagesPreview.css"
import $ from 'jquery';
import 'jquery.nicescroll'
import messageService from '../axios/MessageService'
import {PulseLoader} from "react-spinners";
import Navbar from "./Navbar";

class MessagesPreview extends Component{
    constructor(props) {
        super(props);

        this.state={
            Conversations:[],
            isLoading:true
        }
    }
    componentDidMount() {
        debugger;
        messageService.getConversationForLoggedUser().then(data=>{
            this.setState({
                Conversations:data,
                isLoading:false
            })
        })

        $(".chat").niceScroll();
    }

    render() {
        const conversations = this.state.Conversations;
        const isLoading = this.state.isLoading;



        if(isLoading)
            return (<div className="loader">
                <PulseLoader color={"#202020"} loading={this.state.isLoading} size={40}/>
            </div>)
        let listOfConversation = conversations.map(conversation=>{
            return(
                <div className="user">
                    <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                             alt="User name"/>
                    </div>
                    <div className="name">{conversation.other_person}</div>
                    <div className="mood">User mood</div>
                </div>
            )
        })
        return( <div>
                <Navbar/>
                    <div className="container" style={{color:"black"}}>
                        <div className="content container-fluid bootstrap snippets bootdey">
                            <div className="row row-broken">
                                <div className="col-sm-3 col-xs-12">
                                    <div className="col-inside-lg decor-default chat"
                                         style={{overflow: "hidden", outline: "none"}} tabIndex="5000">
                                        <div className="chat-users">
                                            <h6>Online</h6>
                                            {listOfConversation}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9 col-xs-12 chat" style={{overflow: "hidden", outline: "none"}}
                                     tabIndex="5001">
                                    <div className="col-inside-lg decor-default">
                                        <div className="chat-body">
                                            <h6>Mini Chat</h6>
                                            <div className="answer left">
                                                <div className="avatar">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                         alt="User name"/>
                                                        <div className="status offline"></div>
                                                </div>
                                                <div className="name">Alexander Herthic</div>
                                                <div className="text">
                                                    Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor
                                                    amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur
                                                    adiping elit
                                                </div>
                                                <div className="time">5 min ago</div>
                                            </div>
                                            <div className="answer right">
                                                <div className="avatar">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                         alt="User name"/>
                                                        <div className="status offline"></div>
                                                </div>
                                                <div className="name">Alexander Herthic</div>
                                                <div className="text">
                                                    Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor
                                                    amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur
                                                    adiping elit
                                                </div>
                                                <div className="time">5 min ago</div>
                                            </div>
                                            <div className="answer-add">
                                                <input placeholder="Write a message"/>
                                                    <span className="answer-btn answer-btn-1"></span>
                                                    <span className="answer-btn answer-btn-2"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default MessagesPreview;