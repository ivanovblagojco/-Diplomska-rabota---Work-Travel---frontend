import { Component } from "react";
import LocationService from '../axios/locationService'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
class LocationCreate extends Component{
    constructor(props){
        super(props);

        this.state={
            location:{
                country:"",
                city:"",
                creator:localStorage.getItem("email")
            }
        }

        this.handleSubmit=this.handleSubmit.bind(this);
    }
    

    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(this.state.location)
        LocationService.createLocation(this.state.location).then(data=>{
            if(data!==undefined){
                debugger;
                store.addNotification({
                    title: "Успешно!",
                    message: "Успешно креирана локација",
                    type: "success",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 3000,
                      onScreen: true
                    }
                });   
                this.props.updateParent();
            }else{
                store.addNotification({
                    title: "Неуспешно!",
                    message: "Се појави грешка",
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 3000,
                      onScreen: true
                    }
                  });    
            }
        });
    }
    render(){
        return(
            <div>
            <ReactNotification/>
            <form className="form mb-5 pb-5" action="" method="post" onSubmit={this.handleSubmit}>
                <div class="container">
                    <div class="">
                        <div class="form-group">
                            <label for="name">
                                Држава</label>
                            <input type="text" class="form-control" id="country" placeholder="Држава" required="required" onChange={e => this.setState({ location: { ...this.state.location, country: e.target.value } })} />
                        </div>
                        <div class="form-group">
                            <label for="name">
                                Град</label>
                            <input type="text" class="form-control" id="city" placeholder="Град" required="required" onChange={e => this.setState({ location: { ...this.state.location, city: e.target.value } })} />
                        </div>
                        <div class="">
                            <button class="btn btn-block btn-primary pull-right">
                                Испрати</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}
export default LocationCreate;