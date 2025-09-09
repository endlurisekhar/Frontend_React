import React, { useState } from "react";

function LoginForm(){
    const[user,setUser]=useState({name:"",email:"",password:""})
    const[error,setError]=useState({})


    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        setError({...error,[e.target.name]:" "})
    }
    const validation=()=>{
        let textError={};
        if(!user.name.trim()){
            textError.name="please enter a name"
        }
        if(!user.email.trim()){
            textError.email="please enter a email"
        }
        if(!user.password.trim()){
            textError.password="please enter a password"
        }
        setError(textError)
        return Object.keys(textError).length===0;
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(user)
        if(validation()){
            try{
                
                let res=await fetch("http://localhost:3000/users",{
                    method:"post",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(user),
                })
                if(res.ok){
                    console.log(res)
                }

            }
            catch(err){
                console.log(err)
            }
        }
    }

    return(
        <form onSubmit={handleSubmit} className="card" >
            <div className="form-group mb-3">
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                />
                {error.name&&<p style={{color:"red"}}>{error.name}</p>}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                />
                 {error.email &&<p style={{color:"red"}}>{error.email}</p>}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                />
                 {error.password&&<p style={{color:"red"}}>{error.password}</p>}
            </div>
            <input type="submit" value="submit"/>
        </form>
    )
}
export default LoginForm;