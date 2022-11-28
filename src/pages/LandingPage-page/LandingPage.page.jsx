import Nav from '../../components/LandingPage/Nav'
import {Row, Col, Container, Button, Alert, Card} from 'react-bootstrap'

function landingPage (){
   
    return (
       <div>
           <header>
        <nav className="navbar navbar-expand-lg navbar-dark fw-bold" style="background-color: #0062be;">
            <div className="container sticky-top">
                <a className="navbar-brand" href="#"><img src="./src/images/SARITORY_with_text_v2.png" width="200px" id="landingpage-logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-light text-center" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active mt-2" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mt-2">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item mt-2">
                            <a className="nav-link" href="#Features">Features</a>
                        </li>
                        <li className="nav-item mt-2">
                            <a className="nav-link" href="#Reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./src/pages/register.html"> <button type="button" className="btn register fw-bold text-nowrap" style="border: 3px solid; border-color: #ff9800; color: white;" >REGISTER</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="Register" href="./src/pages/login-signup.html"><button type="button" className="btn login fw-bold text-light" style="background-color: #ff914d; width: 100px; border: solid 3px #ff914d;">LOGIN</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>


        </div>
          
  
    );
}
export default landingPage;