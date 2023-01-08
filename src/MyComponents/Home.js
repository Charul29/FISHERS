
import React from "react";
import "./Xyz.css";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const Home = () => {
  return (<>
    <div>
        <div className="txt">
      <center><font size ="80"><b>STUDENT ATTENDENCE SYSTEM</b></font></center>
      </div>
      <br />
        
        
          {/* Endpoint to route to Home component */}
          
        
        <div >
          {/* Endpoint to route to About component */}
          <Link to="/Myfile"><center>< button type="button" class="btn btn-secondary btn-success">Teacher Login</button></center></Link>
        </div>
            <br/>
        <div>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/Stud"><center><button type="button" class="btn btn-secondary btn-success">
            Student Registration</button></center></Link>
        </div>
        
      
    </div>
 </> );
};
  
export default Home;