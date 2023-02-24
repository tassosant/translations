import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { loginUser } from "../../api/user.js";
import { useUser } from "../../context/UserContext.jsx";
import { storageSave } from "../../utils/storage.js";
import { useNavigate } from "react-router-dom"; //instead of useHistory
import { STORAGE_KEY_USER } from "../../const/storageKeys.js";


//we are doing this because every time this component rerenders it will not re-create this object
const userNameConfig = {
    required: true,
    minLength:2
}

const StartupForm = () =>{
    
    //Hooks
    const {register,
            handleSubmit,
            formState: {errors}
    } = useForm();

    const {user,setUser} = useUser()
    const navigate = useNavigate()

    // const onSubmit = (data)=>{
    //     console.log(data);
    // }

    // Lcoal state
    //state loading and setLoading is the function to update it
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)    
    
    //Side effects
    //if the user changes I want this function to run
    useEffect(()=>{
        if(user!==null){
            navigate('/profile')
        }
        // console.log('User has changed', user)
        //if user exists then redirect to profile
    },[user, navigate]) // Empty dependencies means run only once




    // Event Handlers
    //version 1
    // const onSubmit = async ({username})=>{
    //     setLoading(true)
    //     const [error, user]  = await loginUser(username)
    //     // console.log("URL:",apiUrl)
    //     // console.log("Api key:", apiKey)
    //     // console.log('Error:', error)
    //     // console.log('User:' , user)
    //     setLoading(false)
    // };



    //version 2 video 006
    const onSubmit = async ({username})=>{
        //on submit button, until it finds the user, the page won't let you press the button
        //because we change state to loading
        setLoading(true)
        const [error, userResponse]  = await loginUser(username)
        if(error!==null){
            setApiError(error)
        }
        if(userResponse!==null){
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)//we write that when changing the user
        }
        setLoading(false)
        // we cannot redirect at this point, because the component hasn't reloaded
        // if we redirect it the browser will try to update the state of the component while redirecting
        //This could cause some error messages
    };

    // console.log(errors);


    // Render Functions
    const errorMessage = (()=>{
        if(!errors.username){
            return null
        }
        if(errors.username.type==='required'){
            return <span className="inform-item">Username is required</span>
        }
        if(errors.username.type==='minLength'){
            return <span className="inform-item">Username is too short (min {userNameConfig.minLength})</span>
        }
    })()

    return(
        <div className="startup-box">
            <h2 className="startup-title">What is your name?</h2>
            {/* handlesubmit captures all the values from the form and pass them in parenthesis */}
            <div className="startup-form">

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <fieldset> */}                    
                    {/* <input type="text" {...register("firstName", { required: true, maxLength: 20 })} /> */}
                    <div className="startup-form-item">    
                        <input type="text" 
                                class="inform-item" 
                                placeholder="Type your username"
                                {...register("username", userNameConfig)}/>
                    </div>
                    {/* {(errors.username && errors.username.type==='required') && <span>Username is required</span>}
                    {(errors.username && errors.username.type==='minLength') && <span>Username is too shot (min {userNameConfig.minLength})</span>} */}
                    <div className="startup-form-item"> {errorMessage} </div>
                    {/* </fieldset> */}
                    {/* In other cases we had to use preventDefault to stop redirecting us to another page, 
                    but the handleSubmit function prevents the page from reloading and collects all the data from the inpus of the form*/}
                    <div className="startup-form-item">    
                        <button type="submit" disabled={loading} class="inform-item">Continue</button><br></br>
                    </div>
                    <div className="startup-form-item">    
                        {loading && <p>Logging in...</p>}
                        {apiError && <p>{apiError}</p>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StartupForm