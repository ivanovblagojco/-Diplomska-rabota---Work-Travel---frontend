import { Component } from "react";
import '../css/togglerM.css'
import '../css/togglerM.scss'
import $ from 'jquery'; 
class TogglerM extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let menu = $('#first'),
      menuButton = $('#menu-button'),
      Home = $('#second'),
      Plugins = $('#third'),
      about = $('#fourth'),
      contact = $('#fifth');

    menu.on('click', () => {
      menuButton.toggleClass('active');
      if (menuButton.hasClass('active')) {
        Home.animate({ 'left': '110px', 'opacity': '1', 'z-index': '8' }, 500);
        Plugins.animate({ 'left': '210px', 'opacity': '1', 'z-index': '6' }, 500);
        about.animate({ 'left': '310px', 'opacity': '1', 'z-index': '4' }, 500);
        contact.animate({ 'left': '410px', 'opacity': '1', 'z-index': '2' }, 500);
      }
      else {
        Home.animate({ 'left': '0', 'opacity': '0' }, 500);
        Plugins.animate({ 'left': '0', 'opacity': '0' }, 500);
        about.animate({ 'left': '0', 'opacity': '0' }, 500);
        contact.animate({ 'left': '0', 'opacity': '0' }, 500);
      }
    });
  }
  render(){
    return(
      <ul class="ul-lista">
        <li id="first" class="li-lista">
          <div id="menu-button">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </li>
        <li id="second" >Home</li>
        <li id="third">Plugins</li>
        <li id="fourth">About Us</li>
        <li id="fifth">About Us</li>
      </ul>
    )
  }
}
export default TogglerM;