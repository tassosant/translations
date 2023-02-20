//is responsible for merging all the contexts that might be together

import UserProvider from "./UserContext"

const AppContext = ({children})=>{
    
    return(
        //The more providers we add the more we have to nest them here
        <UserProvider>
            {/* props.childer, we do not use this because we deconstruct it in the function argument */}
            {children}
        </UserProvider>
    )
}

export default AppContext