import { Link } from "react-router-dom"
import { translationClearHistory } from "../../api/translations"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"

const ProfileActions = ()=>{

    const {user,setUser} = useUser()

    const handleLogoutClick = ()=>{
        if(window.confirm('Are you sure?')){
            //send an event to the parent (which currently is the profileView)
            storageDelete(STORAGE_KEY_USER)
            storageSave(STORAGE_KEY_USER,null)
            setUser(null)
        }
    }


    const handleClearHistoryClick = async()=>{
        if(!window.confirm('Are you sure?')){
            return
        }
        const [clearError, clearResult] = await translationClearHistory(user.id)
    }
    return(
        <ul>
            <li><Link to='/translations'>Translations</Link></li>
            {/* the button should clear the translations from the API */}
            {/* the list from translation, exists in the component translation history, needs modifying to display the last ten translations*/}
            <li><button onClick={handleClearHistoryClick}>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
}

export default ProfileActions