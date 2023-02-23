import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () =>{
    const {user} = useUser()

    return(
        <nav>
            <ul>
                <li>Translation emojis</li>
            </ul>
            {/* we want to display the below ul only when we are logged in */}
            {   user!==null &&
            // 
            <>
            <div className="navbar navbar-loggedin items">

                
                    <div className="navbar navbar-loggedin item">
                    <li>
                        <NavLink to="/translations">Translations</NavLink>
                    </li>
                    </div>
                    <div className="navbar navbar-loggedin item">
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    </div>
                
            </div>
            <div className="navbar navbar-loggedin items item username">
                <li>
                    
                    {user.username}
                    
                </li>
            </div>
            </>
            }
        </nav>
    )
}

export default Navbar