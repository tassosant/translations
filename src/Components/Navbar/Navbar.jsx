import { NavLink } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"

const Navbar = () =>{
    

    const {user,setUser} = useUser()

    const handleLogoutClick = ()=>{
        if(window.confirm('Are you sure?')){
            //send an event to the parent (which currently is the profileView)
            //delete from storage
            storageDelete(STORAGE_KEY_USER)
            //save the null user to STORAGE_KEY_USER
            storageSave(STORAGE_KEY_USER,null)
            //update user state to null
            setUser(null)
        }
    }


    return(
        <nav>
            {/*<ul>
                <li>Translation emojis</li>
            </ul>*/}
            
            {/* we want to display the below ul only when we are logged in */}
            {   user!==null &&
            // 
            <>
            
            <div className="navbar-loggedin">

                
                <div className="navbar-loggedin-item">                
                    <NavLink to="/translations" id="nav-translation-button" className="clickable">Translations</NavLink>                
                </div>
                <div className="navbar-loggedin-item">
                
                    {/*<NavLink to="/profile" class="nav-buttons">Profile</NavLink>*/}
                
                </div>
                
            
                <div className="navbar-loggedin-username">

                    <button onClick={handleLogoutClick} id="logout-button" className="clickable">Logout</button>                                        
                    <NavLink to="/profile" id="user-text" className="clickable">Welcome,  <u>{user.username}</u></NavLink>                
                    
                </div>
            </div>
            </>
            }
        </nav>
    )
}

export default Navbar