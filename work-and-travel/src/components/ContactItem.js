import {Component} from "react";
import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/contactItem.css'
class ContactItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container">
                <div class="row" >
                    <div style={{width:"100%"}}> 
                        <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                            <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
                            <p class="mb-0 mt-2 font-italic">{this.props.contact.message}</p>
                            <span class="blockquote-footer pt-4 mt-4 border-top">{this.props.contact.name}
                                <a> - {this.props.contact.email}</a>
                            </span>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactItem;