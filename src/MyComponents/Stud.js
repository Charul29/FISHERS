import React from 'react'
import { Link } from "react-router-dom";


export const Stud = () => {
  return (
    <div className="container  my-3">
        <h3>Student Registration</h3>
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">Name</label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Branch</label>
                <input type="text" class="form-control" id="desc"/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Division</label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Semester</label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Subject </label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Roll No.</label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
                <button type="submit" class="btn btn-sm btn-success">Submit</button>
            <div>
            <Link to="/"><button class="btn btn-sm btn-success">Home</button></Link>
            </div>
        </form>
    </div>
  )
}
