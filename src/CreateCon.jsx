import React, { createContext } from "react";

export const personContext=createContext()
const user={name:"reddy",age:23}

const PersonProvider=({children})=>{
    return <personContext.Provider value={user}>{children}</personContext.Provider>
}
export default PersonProvider;