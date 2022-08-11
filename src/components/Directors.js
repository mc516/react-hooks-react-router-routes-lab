import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      { 
        directors.map(director => { 
          return (
            <div>
              <strong>Name: {director.name}</strong>
              <br></br>
              Movies: 
              <br></br>
                <ul>
                  <li>{director.movies.map(movie => {return <li>{movie}</li>})}</li>
                </ul>             
            </div>
          )}
        )
      }   
    </div>
  )
}

export default Directors;
