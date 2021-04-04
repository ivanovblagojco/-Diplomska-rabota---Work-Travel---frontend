import {Component} from "react";
import "../css/footer.css"
class Footer extends Component{
    render() {
        return(
            <div>
                <br/>
                <br/>
                <br/>
                    <div className="footer" style={{background :"#17a2b8"}}>
                        <p>Проект изработен за дипломска работа - 2020 година.</p>
                    </div>
            </div>
        )
    }
}
export default Footer;