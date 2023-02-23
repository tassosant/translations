import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () =>{
    const {user} = useUser()

    return(
        <nav>
            {/*<ul>
                <li>Translation emojis</li>
            </ul>*/}
            <br></br>
            {/* we want to display the below ul only when we are logged in */}
            {   user!==null &&
            // 
            <>
            
            <div className="navbar-loggedin">

                
                <div className="navbar-loggedin-item">                
                    <NavLink to="/translations" id="nav-translation-button">Translations</NavLink>                
                </div>
                <div className="navbar-loggedin-item">
                
                    {/*<NavLink to="/profile" class="nav-buttons">Profile</NavLink>*/}
                
                </div>
                
            
                <div className="navbar-loggedin-username">
                                        
                      <NavLink to="/profile" id="user-text">Welcome,  <u>{user.username}</u></NavLink>                
                    
                </div>
            </div>
            </>
            }
        </nav>
    )
}

export default Navbar