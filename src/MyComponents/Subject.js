import React from 'react'
import { Link } from "react-router-dom";

export const Subject = () => {
  return (
    <div className="txt">
    <div className="container  my-3"  >
    <h3>Select the subject!!!</h3>
        <br/>
    <form>
        <Link to="/Date"><button type="button" class="btn btn-secondary ">Object Oriented Programming (OOP)</button></Link>
        <br/><br/><br/>
        <Link to="/Date"><button type="button" class="btn btn-secondary ">Fundamentals in Data Structure(FDS)</button></Link>
        <br/><br/><br/>
        <Link to="/Date"><button type="button" class="btn btn-secondary ">Computer Graphics(CG)</button></Link>
        <br/><br/><br/>
        <Link to="/Date"><button type="button" class="btn btn-secondary ">Discrete Mathematics(DM)</button></Link>
        <br/><br/><br/>
        <Link to="/Date"><button type="button" class="btn btn-secondary ">Degital Electronics and Logic Design(DELD)</button></Link>
        <br/><br/><br/>
    </form>


    </div>
    </div>
  )
}
