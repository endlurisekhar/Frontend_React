import { throttle } from "lodash";
import React, { useEffect } from "react";

function Page(){
   useEffect(()=>{
    const handle=throttle(()=>{
        console.log("scroll",window.scrollY);
    })
    window.addEventListener("scroll",handle)
    return()=>{
        removeEventListener("")
    }
   })
   return(
   <div style={{height:"250vh"}}>scroll</div>
   )
}
export default Page;