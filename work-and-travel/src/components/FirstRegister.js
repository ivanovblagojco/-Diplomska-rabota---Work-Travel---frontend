import {Component} from "react";
import Navbar from "./Navbar";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class FirstRegister extends Component{
    render() {
        const query = new URLSearchParams(this.props.location.search);
        const message = query.get('m');
        let final_message="";
        if(message==="exists"){
            final_message="Корисникот веќе постои. Преминете кон најава.";
        }else if(message==="success"){
            final_message="Корисникот е успешно потврден. Преминете кон најава.";
        }else{
            final_message="Токенот за потврда на корисник е изминат. Ве молиме креирајте ново барање за регистрација."
        }
        return(
            <div>
                 <Navbar/>
                 <div className="d-flex justify-content-md-center align-items-center vh-100" style={{font:10, color:"white"}}>
                     <h4>{final_message}</h4>
                 </div>
            </div>
        )
    }
}


export default FirstRegister;