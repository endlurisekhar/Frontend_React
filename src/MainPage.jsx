import { throttle } from "lodash";
import React, { useEffect } from "react";

function MainPage(){
    useEffect(()=>{
        const handleScroll=throttle(()=>{
            console.log("scroll",window.scrollY)
        },1000)

        window.addEventListener("scroll",handleScroll)
        return ()=>{
            window.removeEventListener("");
        }
    })
    return(
        <div style={{height:"250vh"}}>
            scroll
        </div>
    )
}
export default MainPage;