import React from 'react'
//import {Myfile} from "./MyComponents/Myfile"


export const First = () => {
    let Firststyle={
        position: "absolute",
        height: "min-content",
        width: "max-content",
        top: "10vh",
        left: "70vh",
        //FontFace: 
    }
    
  return (

    <div className="container  my-3"  style={Firststyle} >
        <h3>STUDENT ATTENDENCE SYSTEM</h3>
        
        <form>
            <button type="button" class="btn btn-primary btn-success " 
            onClick={window}>Teacher Login</button>
            <button type="button" class="btn btn-secondary btn-success" >Student Registration</button>
        </form>

    </div>

  
    
  );
}

