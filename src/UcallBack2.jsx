import React from "react";

const UcallBack2=({name})=>{
    return(
        <>
        <h1>{name}</h1>
        </>
    )
}
export default React.memo(UcallBack2);