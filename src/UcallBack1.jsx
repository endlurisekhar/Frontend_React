import React, { useCallback, useState } from "react";
import UcallBack2 from "./UcallBack2";
import UcallBack3 from "./UcallBack3";
import UcallBack4 from "./UcallBack4";

function UcallBack1(){
    const[name,setName]=useState("reddy")
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    const handlCount1=useCallback(()=>{
        setCount1(count1+1)
    },[count1])
     const handlCount2=useCallback(()=>{
        setCount2(count2+1)
    },[count2])
    return(
        <>
        <UcallBack2 name={name}/>
        <UcallBack3 count1={count1} handlCount1={handlCount1}/>
        <UcallBack4 count2={count2} handlCount2={handlCount2}/>
        </>
    )
}
export default UcallBack1;