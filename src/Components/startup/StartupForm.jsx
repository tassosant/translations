import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { loginUser } from "../../api/user.js";
import { storageSave } from "../../utils/storage.js";
// import useHi


//we are doing this because every time this component rerenders it will not re-create this object
const userNameConfig = {
    required: true,
    minLength:2
}

const StartupForm = () =>{
    const {register,
            handleSubmit,
            formState: {errors}
    } = useForm();

    // const onSubmit = (data)=>{
    //     console.log(data);
    // }

    // Lcoal state
    //state loading and setLoading is the function to update it
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)    
    
    //Side effects
    useEffect(()=>{
        //if user exists then redirect to profile
    },[]) // Empty dependencies means run only once




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
        setLoading(true)
        const [error, user]  = await loginUser(username)
        if(error!==null){
            setApiError(error)
        }
        if(user!==null){
            storageSave('translation-user', user)
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
            return <span>Username is required</span>
        }
        if(errors.username.type==='minLength'){
            return <span>Username is too shot (min {userNameConfig.minLength})</span>
        }
    })()

    return(
        <div>
            <h2>What is your name?</h2>
            {/* handlesubmit captures all the values from the form and pass them in parenthesis */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>

                <label htmlFor="username">Username: </label>
                {/* the spread operator is used to pass the properties of validationrules object as separate props to the input field so the 'required' and 'maxLength' attributes will be applied to the input field. */}
                {/* <input type="text" {...register("firstName", { required: true, maxLength: 20 })} /> */}
                <input type="text" 
                        placeholder="Type your username"
                {...register("username", userNameConfig)}/>
                {/* {(errors.username && errors.username.type==='required') && <span>Username is required</span>}
                {(errors.username && errors.username.type==='minLength') && <span>Username is too shot (min {userNameConfig.minLength})</span>} */}
                {errorMessage}
                </fieldset>
                {/* In other cases we had to use preventDefault to stop redirecting us to another page, 
                but the handleSubmit function prevents the page from reloading and collects all the data from the inpus of the form*/}
                <button type="submit" disabled={loading}>Continue</button>
                {loading && <p>Logging in...</p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </div>
    )
}

export default StartupForm