import { Link } from "react-router-dom"


const ProfileActions = ({logout})=>{
    const handleLogoutClick = ()=>{
        if(window.confirm('Are you sure?')){
            //send an event to the parent (which currently is the profileView)
            logout()
        }
    }
    return(
        <ul>
            <li><Link to='/translations'>Translations</Link></li>
            <li><button>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
}

export default ProfileActions