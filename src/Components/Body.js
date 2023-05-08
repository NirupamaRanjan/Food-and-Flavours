import React, { useState }  from "react";
import ResCard from "./ResCard";
import resData from "../../utils/restData";



const Body=()=>{
  const finalResData=resData.data.data.cards;
  const [renderedData,setRenderedData]=useState(finalResData)
  

  const getTopRatedRes=()=>{
    let filteredData=finalResData.filter(res=> res.data.avgRating>=4)
    setRenderedData(filteredData)
  }
    return (
    <>
    <button onClick={getTopRatedRes}>Top Rated</button>
    <button onClick={()=> setRenderedData(finalResData)}>All restraunts</button>
    <div className="body">
      {renderedData.map(res=>{
          const data=res.data
          console.log("res.data",res.data)
          return <ResCard key={data.id} restaurant={data}/>
      })}
    </div>
    </>
    )
  
 }

export default Body;