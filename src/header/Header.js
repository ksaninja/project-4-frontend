import React from 'react'
import { Link } from 'react-router-dom'
import salha from '../images/salha_signiture_2018.png';
import './Header.scss'
import Resume from '../Resume'
const authenticatedOptions = (
<div> <React.Fragment> <span/><br/>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment></div>
)

const stl = {
  width: 65,
  height: 120

}
const unauthenticatedOptions = (
  <div><React.Fragment><sapn/><br/>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
   
  </React.Fragment></div>
)

const alwaysOptions = (
  <div><React.Fragment><br/><span/>
    <Link to="/">Home</Link>
    <Link to="../Resume">My Resume</Link>
  </React.Fragment></div>
)

const Header = ({ user }) => (
  <div><header className="main-header hpad"><br/><span/><br/><span/><br/><span/>
    <img src={salha} style={stl}/><span/>
<br/>
    <p className="slog1 hpad">"It's All About the Journey Not the Distination.. ^^"<br/><p className="slog">"إلتمس قيمة الجمال فيما حولك .. ص.ع"</p></p>
    <br/>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header></div>
)

export default Header
