import StartupForm from "../Components/startup/StartupForm.jsx"
const Startup = ()=>{
    
    return(
        <div className="main-body startup">
            <div className="startup title">
                <h1>Register or login</h1>
            </div>
        {/* success={onSuccess} */}
            <StartupForm />
        </div>
    )
}
export default Startup