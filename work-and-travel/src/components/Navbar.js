import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/navbar.css'
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
            <div class="container">
                <a class="navbar-brand" href="#">Work&Travel</a>
                <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                    &#9776;
                </button>
                <div class="collapse navbar-collapse" id="exCollapsingNavbar">
                    <ul class="nav navbar-nav">
                        <li class="nav-item"><a href="#" class="nav-link">Почетна</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Link</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Link</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Link</a></li>
                    </ul>
                    <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
                        <li class="nav-item"><Link to={'/login'} class="nav-link">Најава</Link></li>
                        <li class="nav-item"><Link to={'/register'} class="nav-link">Регистрација</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  );
}

export default Navbar;