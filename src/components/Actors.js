import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      { 
        actors.map(actor => { 
          return (
            <div>
              Name: {actor.name}
              <br></br>
              Movies: 
              <br></br>
              {actor.movies.map(movie => 
                  {return (
                    <ul>
                      {<li>{movie}</li>}
                    </ul>
                  )
                  }                
              )}
            </div>
          )
        })
      }
    </div>
  )
}

export default Actors;
