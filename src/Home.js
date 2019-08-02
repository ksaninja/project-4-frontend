import React, { Component } from 'react'
import { withRouter , Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "mdbreact";
// import {findAll,destroy, create} from './api'
import './home.css'
import Social from './Socials'
import Subscribe from './subscribe'
class Home extends React.Component {


render()
{

return(

<div><center>
<nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto navv">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse navv" id="navbarNav">
    <ul className="navbar-nav leftpad">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link btn btn-outline-danger" href="#1">Inspiring</a>
      </li>
      <li className="nav-item">
        <a className="nav-link btn btn-outline-danger" href="#2">Art videos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link btn btn-outline-danger" href="#3">Music List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link btn btn-outline-danger " href="#4">Contact me</a>
      </li>
    </ul>
  </div>
</nav></center>
<section className="seccolor0 " id="1">
    <div className="felxy ">
<div className="noscrollcon leftsec padtop">
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/lYGGpc2mMno" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy radiusy" src="https://www.youtube.com/embed/y-dxi8--1Fs" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/RLTgnOuYb6o" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/dJyz6iK8VXE" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/HAnw168huqA" allowfullscreen></iframe>
</div>
</div>
</div>
<div className="felxy divy2">
<h1 className="padbot headline1 "> Inspiring Vids</h1>
{/* <p className="prg">   
Here some Inspiring videos and speeches by some very successful Influencing people...
</p> */}
</div>
</section>
<p/>
<section className="seccolor3 "id="2">    <div className="felxy ">
<div className="noscrollcon rightsec padtop">
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/A4xO2q3T8cU" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/JjxFXc4EDlo" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/5pmIYH1ugtk" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/iPVop7wnZsU" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/9g2xLIYErvQ" allowfullscreen></iframe>
</div>
</div>
</div>
<div classNameName="felxy ">
<h1 className="padbot headline"> Art Vids</h1>
<span/><br/>
</div>
</section>
<p/>
<section className="seccolor0"  id="3">    <div className="felxy bg-gray">
<div className="noscrollcon leftsec padtop">
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/9dobJDxPEzM" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/r8a6hbhf5hI" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/nUOmX7CRRFk" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/6nM1lwBB9lY" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/EdUoWklL2FI" allowfullscreen></iframe>
</div><p/>
<div className="embed-responsive embed-responsive-16by9 radiusy">
  <iframe className="embed-responsive-item radiusy" src="https://www.youtube.com/embed/gBRi6aZJGj4" allowfullscreen></iframe>
</div>
</div>
</div>
<div className="">
<h1 className="padbot headline1"> Music Playlist</h1>

<span/><br/>
</div>
</section>

<section className=" seccolor1 " id="4">
<center><div ><br/><br/>
<span className="h11">You Can Follow me On these Social Networks ^^</span>
{/* <div><Social/></div> */}

<div className="container">

<div className="row">

  <div className="col-md-12 py-5">
    <div className="mb-5 flex-center">

      <a className="fb-ic">
      <i className="icon ion-logo-facebook"><a href="#"></a></i>
      </a>
      <a className="logo-twitter">
      <i className="icon ion-logo-twitter"><a href="#"></a></i>
      </a>
      <a className="gplus-ic">
      <i className="icon ion-logo-googleplus"><a href="#"></a></i>
      </a>
      <a className="li-ic">
      <i className="icon ion-logo-linkedin"><a href="#"></a></i>
      </a>
      
      <a className="ins-ic">
      <i className="icon ion-logo-instagram"><a href=""></a></i>
      </a>
      
     
    
   
  </div></div>

</div>
</div> 
</div><div className="centering"><br/>
     <center><Subscribe/></center> 
    </div></center>
</section> 
</div>
)}}

export default withRouter(Home)