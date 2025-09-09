import React from "react";
import Hoc from "./Hoc";

const Section3=(props)=>(
    <>
    <h1>{props.count}</h1>
   <button onClick={props.handleCount} >start</button>
    </>
)
export default Hoc(Section3);