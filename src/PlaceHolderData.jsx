import React, { useEffect, useState } from "react";

function PlaceHolderData(){
    const[user,setUser]=useState([])
    useEffect(()=>{
        let handleData=async()=>{
            let res=await fetch("https://jsonplaceholder.typicode.com/users")
            let data=await res.json()
            setUser(data)
            console.log(data)
        }
        handleData();
    },[])
    return(
        <>
        {user.map((e)=>{
            return(
                <>
                <h1>{e.name}</h1>
                <h1>{e.email}</h1>
                </>
            )
        })}
        </>
    )
}
export default PlaceHolderData;