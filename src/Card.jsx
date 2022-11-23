import React from "react";

const Card=(prop)=>
{
    return(
        <div className="cardm">
        <div className="cardd" >
        <img src={prop.image}
          className="card-img-top" alt="" />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
    )
}
 export default Card;