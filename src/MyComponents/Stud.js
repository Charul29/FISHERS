import React from 'react'
import { Link } from "react-router-dom";
import "./Xyz.css";


export const Stud = () => {
  return (
    <div className="container  my-3 , box1">
        <h3><font size="15">Student Registration</font></h3>
        <form>
            <div class="mb-3">
                <label for="title" class="form-label"><b>Name</b></label>
                <input type="text" class="form-control " aria-label="Name" aria-describedby="basic-addon1"/>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label"><b>Branch</b></label>
                <input type="text" class="form-control" aria-label="Branch" aria-describedby="basic-addon2"/>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label"><b>Division</b></label>
                <input type="text" class="form-control" aria-label="Division" aria-describedby="basic-addon3"/>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label"><b>Semester</b></label>
                <input type="text" class="form-control" aria-label="Semester" aria-describedby="basic-addon4"/>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label"><b>Roll No.</b></label>
                <input type="text" class="form-control" aria-label="Roll No." aria-describedby="basic-addon6"/>
            </div>
            <div>
                <button type="submit" class="btn btn-sm btn-success">Submit</button>
            </div>
            <br/>
            <div>
                <Link to="/"><button class="btn btn-sm btn-success">Home</button></Link>
            </div>
        </form>
    </div>
  )
}
