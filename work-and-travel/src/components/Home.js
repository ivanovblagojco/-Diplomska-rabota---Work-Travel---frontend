import React, { Component } from 'react';
import Navbar from './Navbar.js'
class Home extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
               <Navbar/>
            </div>
        </BrowserRouter>
    )
  }
}

export default Home;