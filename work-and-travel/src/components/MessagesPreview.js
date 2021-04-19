import {Component} from "react";
import "../css/messagesPreview.css"
import $ from 'jquery';
import 'jquery.nicescroll'
import messageService from '../axios/MessageService'
import userService from '../axios/userService'
import {PulseLoader} from "react-spinners";
import Navbar from "./Navbar";
import Footer from "./Footer";

class MessagesPreview extends Component{
    constructor(props) {
        super(props);

        this.state={
            Conversations:[],
            isLoading:true,
            Messages:[],
            logged_email:"",
            message: {
                title:"",
                description:"",
                sender_email:"",
                receiver_email:""
            },
            lastConversation:null
        }
        this.handleItemClick=this.handleItemClick.bind(this);
        this.handleWriteMessageChange=this.handleWriteMessageChange.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this);

    }
    componentDidMount() {
        userService.getLoggedUser().then(data=> {
            this.setState({
                logged_email:data.email
            })
        });

        messageService.getConversationForLoggedUser().then(data=>{
            this.setState({
                Conversations:data,
                isLoading:false
            })
        })
    }
    handleWriteMessageChange(e){
        this.setState({
            message:{
                ...this.state.message,
                description:e.target.value
            }
        })
    }
    handleKeyDown(e){
        if(e.key==='Enter'){
            userService.getLoggedUser().then(data=>{
                this.setState({
                    message:{
                        ...this.state.message,
                        sender_email:data.email,
                        receiver_email:this.state.lastConversation.other_person}
                })
                messageService.createMessage(this.state.message).then(res=>{
                    messageService.getConversationMessages(this.state.lastConversation.name).then(data=>{
                        this.setState({
                            Messages:data
                        })
                        document.getElementById("msg").value="";
                        $(".chat").getNiceScroll().resize();
                    })
                })
            });
        }
    }
    handleItemClick (e, conversation){
        this.setState({
            lastConversation:conversation
        })
        messageService.getConversationMessages(conversation.name).then(data=>{
            this.setState({
                Messages:data
            })
            $(".chat").niceScroll();
            if($(".chat").getNiceScroll()!==null){
                $(".chat").getNiceScroll().resize();
            }
        })

    }
    render() {
        const conversations = 
            this.state.Conversations;
        const isLoading = this.state.isLoading;
        const messages = this.state.Messages;


        if(isLoading)
            return (<div className="loader">
                <PulseLoader color={"#202020"} loading={this.state.isLoading} size={40}/>
            </div>)
        let listOfConversation = conversations.map(conversation=>{
            return(
                <div className="user" value={conversation.name} onClick={e=>{this.handleItemClick(e, conversation)}}>
                    <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                             alt="User name"/>
                    </div>
                    <div className="name">{conversation.other_person}</div>
                    <div className="mood">Корисник</div>
                </div>
            )
        })

        let listOfMessages = messages.map(message=>{
                if(this.state.logged_email===message.sender.email){
                    return(
                        <div className="answer left">
                            <div className="avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                     alt="User name"/>
                                <div className="status offline"></div>
                            </div>
                            <div className="name">{message.sender.email}</div>
                            <div className="text">
                                {message.description}
                            </div>
                            <div className="time">{message.date_creation}</div>
                        </div>
                    )
                }else{
                    return (
                        <div className="answer right">
                            <div className="avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                     alt="User name"/>
                                <div className="status offline"></div>
                            </div>
                            <div className="name">{message.sender.email}</div>
                            <div className="text">
                                {message.description}
                            </div>
                            <div className="time">{message.date_creation}</div>
                        </div>
                    )
                }
        })
        return( <div>
                <Navbar/>
                    <div className="container" style={{color:"black"}}>
                        <div className="content container-fluid bootstrap snippets bootdey">
                            <div className="row row-broken" >
                                <div className="col-sm-3 col-xs-12">
                                    <div className="col-inside-lg decor-default chat"
                                         style={{overflow: "hidden", outline: "none", borderRadius:"25px"}} tabIndex="5000">
                                        <div className="chat-users">
                                            <h6>Пораки</h6>
                                            {listOfConversation}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9 col-xs-12 chat" style={{overflow: "hidden", outline: "none"}}
                                     tabIndex="5001">
                                    <div className="col-inside-lg decor-default" style={{borderRadius:"25px"}}>
                                        <div className="chat-body">
                                            <h6>Конверзација</h6>
                                            {listOfMessages}
                                            <div className="answer-add">
                                                <input id="msg" placeholder="Нова порака..." onChange={e=>{this.handleWriteMessageChange(e)}} onKeyDown={e=>{this.handleKeyDown(e)}}/>
                                                    <span className="answer-btn answer-btn-1"></span>
                                                    <span className="answer-btn answer-btn-2"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}
export default MessagesPreview;