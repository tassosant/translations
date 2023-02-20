import { createContext, useContext, useState } from "react"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { storageRead } from "../utils/storage"
//is responsible for managing the user context

//A context relies on two parts, the context object(consumer??) and the context provider
//the createContext gives us an optional default value, we don't do that because this is only valid if we forget to wrap the appcontext with the provider
//Context-> exposing (creating the context and then later we can pull out the context's value from this context object)
const UserContext = createContext()


//we need to be able to access the value, so we need the useContext function
// if we don't do the below lines we have to use the usecontext in every component which needs to use this value

export const useUser = ()=>{
    return useContext(UserContext) //{user,setUser}
}

//provider->managing state
const UserProvider = ({children})=>{
    //magic strings or numbers
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER))

    const state = {
        user,
        setUser
    }
    return(
        <UserContext.Provider value={state}> {/*The value is the state we want to expose */}
            {children}
        </UserContext.Provider>   
    )
}

export default UserProvider