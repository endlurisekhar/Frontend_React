import React from "react";

const Child=({users})=>{
    return(
        <>
        <button onClick={()=>users("begun")}>Start</button>
        </>
    )
}
export default Child;