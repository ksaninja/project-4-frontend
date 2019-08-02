import React,{ Component } from 'react';

import { Link , Route} from 'react-router-dom';

// import rocart from '../images/rocart-logo.png';
import './home.css'
export default class Resume extends Component 
{
   
render()
{
return (

    <div > 
        <span/><br/>
        <div className="info">
					<h2 className="headline1">Hello There!</h2>
                    <ul><li className="line">Basic Info:</li>
                    <li><span className="line">Name:</span>    Salha Al Aqeel Alghamdi</li>
                    <li ><span className="line">Age:</span><b>    age of Flowwwwweeerrs ^_^</b></li>
                    <li><span className="line">Current City:</span> Jeddah</li>
                   <li> <span className="line">Interest:</span> Basically Everything</li></ul>
                   <div class="col-md-8"></div>
                    <p>                    I am an extremely motivated individual who is constantly trying to grow professionally. I am confident in my ability to come up with fresh ideas and eager to learn more from anyone.</p>
    
    <p>                I have adept  in UX, Online Marketing, Designing, Websites, Strategic management, E-commerce,  Public Relations, Analyzing systems and Solving Problems.</p>
					<p>
						</p>
					<p></p>
				</div>
   
        </div>

);
}
}


