import React from "react";
import UcallBack1 from "./UcallBack1";

const UcallBack3=({count1,handlCount1})=>{
    console.log("from usecallback3...")
    return(
        <>
        <h1>{count1}</h1>
        <button onClick={handlCount1}>Start1</button>
        </>
    )
}
export default React.memo(UcallBack3);