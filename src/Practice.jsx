import React from "react";

function Practice(){

    localStorage.setItem("name","laddu")
    sessionStorage.setItem("age",23);
    document.cookie="name=chinni";
    return(
        <>
        <h1>{localStorage.getItem("name")}</h1>
        </>
    )
}
export default Practice;