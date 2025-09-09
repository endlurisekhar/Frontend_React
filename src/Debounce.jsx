import React, { useEffect, useState } from "react";
import { UseDebounce } from "./UseDebounce";

function Debounce(){
    const[value,setValue]=useState("")
    let db=UseDebounce(value)
    useEffect(()=>{
        if(db){
            console.log("api called"+db)
        }
    },[db])

 
    return(
        <>
        <input
        type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder="enter a value"
       
        />
        </>
    )
}
export default Debounce;