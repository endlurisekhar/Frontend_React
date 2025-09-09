
import React, { useEffect, useState } from "react";

export const UseDebounce=(input,delay=500)=>{
    const[debounce,setDebounce]=useState(input);

    useEffect(()=>{
        let res=setTimeout(()=>{
            setDebounce(input)
        },delay)
        return ()=>{
            clearTimeout(res)
        }
    },[input,delay])
    return debounce;
}