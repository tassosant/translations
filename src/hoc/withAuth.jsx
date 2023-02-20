import { Component } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const withAuth = Component => props=>{
    const {user}=useUser()
    if(user!==null){
        //return any props we want to use later,if the user exists
        return <Component {...props}/>
    }else{
        //navigate to home guest page
        return <Navigate to="/"/>
    }
}
export default withAuth