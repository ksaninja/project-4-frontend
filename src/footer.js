import React, { Component } from 'react'
import { withRouter , Link } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import {findAll,destroy, create} from './api'
// import './home.css'
import Socials from './Socials'
import facebook from './images/icons8-facebook-old-100.png';
import twitter from './images/icons8-twitter-100.png';
import instagram from './images/icons8-instagram-100.png';
import youtube from './images/icons8-play-button-100.png';
import linkedin from './images/icons8-linkedin-100.png';
import snapchat from './images/icons8-snapchat-100.png';
import bayt from './images/icons8-b-64.png';
import FormPage from './contact'

const stl = {
    width: 55,
    height: 55

}
const Footer =()=>{


    


  return (<div>
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact me</h5>
           <FormPage/>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links to my Social Networks:</h5>
            <ul>
            <li className="list-unstyled">
                <h6><img src={instagram} style={stl}/><a href="http://instagram.com/salha.aqeel">Instagram</a></h6>
              </li>
              <li className="list-unstyled">
              <h6><img src={twitter} style={stl}/><a href="http://twitter.com/salha-aqeel">Twitter</a></h6>
              </li>
              <li className="list-unstyled">
              <h6><img src={snapchat} style={stl}/><a href="http://snapchat.com/add/salha.aqeel">Snapchat</a></h6>
              </li>
              <li className="list-unstyled">
             <h6> <img src={facebook} style={stl}/><a href="http://facebook.com/salhaalghamdi">Facebook</a></h6>
              </li>
              <li className="list-unstyled">
              <h6><img src={youtube} style={stl}/><a href="http://youtube.com/">Youtube</a></h6>
              </li>
              <li className="list-unstyled">
              <h6><img src={linkedin} style={stl}/><a href="http://linkedin.com/in/salhaalghamdi">Linkedin</a></h6>
              </li>
              <li className="list-unstyled">
              <h6><img src={bayt} style={stl}/><a href="http://people.bayt.com/salhaalghamdi">Bayt.com</a></h6>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} All the Copyright: <a href="https://github.com/ksaninja"> https://github.com/ksaninja </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    
    </div>
  )

    




}

export default withRouter(Footer)