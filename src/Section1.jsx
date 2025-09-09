import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/CounterSlice";

function Section1(){
    const data=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
    return(
        <>
        <h1>{data}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        </>
    )
}
export default Section1;