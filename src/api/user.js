//linked to our user, take the login and checks if the user exists
import { createHeaders } from "./index.js"
const apiUrl = process.env.REACT_APP_API_URL

const checkForUser =  async (username)=>{
    try{
        const response = await fetch(`${apiUrl}?username=${username}`)
        if(!response.ok){
            throw new Error('Could not complete request')
        }
        const data = await response.json()
        // console.log("requested url",apiUrl)
        return [null, data]
    }catch(error){
        return [error.message, []]
    }
}

//this function needs authentication before creating resources
//
const  createUser = async (username)=>{
    try{
        const response = await fetch(apiUrl, {
            method:'POST',
            headers: createHeaders(),
            //http does not understand js, it understands only strings
            body:JSON.stringify(
               { username,
                translations:[]
            }
            )
        })
        if(!response.ok){
            throw new Error('Could not create user with username '+username)
        }
        const data = await response.json()
        return [null, data]
    }catch(error){
        return [error.message, []]
    }
}



export const  loginUser = async (username)=>{
    const [checkError, user] = await checkForUser(username)
    // if(user.length ===0){
    //     //user does NOT exist
    // }
    if(checkError!==null){
        return [checkError, null]
    }
    if(user.length > 0){
        return [null, user.pop()]
    }


    // const [creatError, newUser] = createUser(username)
    return await createUser(username)


}



export const findUserById = async (userId)=>{
    try{
        const response = await fetch(`${apiUrl}/${userId}`)
        if(!response.ok){
            throw new Error("Could not fetch user")
        }
        const user = await response.json()
        return [null,user]
    }catch(error){
        
        return[error.message, null]
    }
}
