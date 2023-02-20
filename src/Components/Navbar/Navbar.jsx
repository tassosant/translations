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
                <ul>
                <li>
                    <NavLink to="/translations">Translations</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
            }
        </nav>
    )
}

export default Navbar