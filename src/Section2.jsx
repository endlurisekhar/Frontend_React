import React, { useContext } from "react";
import { personContext } from "./CreateCon";

function Section2(){
    const data=useContext(personContext)
    return(
        <>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        </>
    )
}
export default Section2;