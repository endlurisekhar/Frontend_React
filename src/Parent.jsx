import React, { useState } from "react";
import Child from "./Child";

function Parent(){
    const[user,setUser]=useState("codebegun")

    const handleData=(data)=>{
        setUser(data)
    }

    return(
        <>
        <h1>{user}</h1>
        <Child users={handleData}/>
        </>
    )
}
export default Parent;