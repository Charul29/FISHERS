import React from 'react'



export const Date = () => {
  return (
    <div className="container  my-3">
        <h3>Enter the Date</h3>
        <form>
            <div class="mb-3">
                <input type="date" class="form-control " placeholder='Enter the Date' aria-label="Date" aria-describedby="basic-addon1"/>
            </div>
            <div class=" mx-3">
              <button type="button" class="btn btn-secondary btn-success" >Present</button>
              <button type="button" class="btn btn-secondary btn-danger">Absent</button>
            </div>
        </form>
        <br/>
        
    </div>
  )
}
