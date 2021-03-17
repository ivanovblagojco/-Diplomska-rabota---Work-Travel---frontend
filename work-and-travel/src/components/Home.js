import {Component} from "react";
import Navbar from'./Navbar'
import Footer from "./Footer";
class Home extends Component{
    render() {
        return(
            <div>
                <Navbar/>
                <Footer/>
            </div>
        )
    }
}

export default Home;