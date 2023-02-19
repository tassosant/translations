//is responsible for merging all the contexts that might be together

const AppContext = ({children})=>{
    return(
        <>
            {/* props.childer, we do not use this because we deconstruct it in the function argument */}
            {children}
        </>
    )
}

export default AppContext