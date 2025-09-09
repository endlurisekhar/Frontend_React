import React from "react";
import UcallBack1 from "./UcallBack1";

const UcallBack4=({count2,handlCount2})=>{
    console.log("from usecallback4...")
    return(
        <>
        <h1>{count2}</h1>
        <button onClick={handlCount2}>Start2</button>
        </>
    )
}
export default React.memo(UcallBack4)