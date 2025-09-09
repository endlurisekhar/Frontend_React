import React, { useState } from "react";

const Hoc=(Original)=>{
    const NewComponent=()=>{
        const[count,setCount]=useState(0)
        const handleCount=()=>{
            setCount(count+1)
        }
        return <Original count={count} handleCount={handleCount}/>

    }
    return NewComponent
}
export default Hoc;