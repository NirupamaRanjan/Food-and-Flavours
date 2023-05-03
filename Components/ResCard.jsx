import React from "react";
import "./resCard"

// Card
//   -Image
//   -Name
//   -Category
//   -Rating
//   -Time to deliver
//   -Price for tow 
//   -Offers


const ResCard=(props)=>{
    const {name,cuisines,avgRating,deliveryTime,costForTwo,cloudinaryImageId}=props.restaurant
    console.log("--------",name,cuisines,avgRating)
    console.log(props)
  return(  <div className="card" >
      <img  alt="Food-img" className="res-img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} >
      </img>
      <h2>
          {name}
      </h2>
      <h5>
          {/* {cuisines.join(",")} */}
      </h5>
      <h3>
          {avgRating} &star;
      </h3>
      <h3>
         {deliveryTime} mins
      </h3>
      <h3>
      &#8377;{costForTwo/100} for two
      </h3>
    </div>
    )
}

export default ResCard