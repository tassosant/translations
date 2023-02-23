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
            //delete from storage
            storageDelete(STORAGE_KEY_USER)
            //save the null user to STORAGE_KEY_USER
            storageSave(STORAGE_KEY_USER,null)
            //update user state to null
            setUser(null)
        }
    }


    const handleClearHistoryClick = async()=>{
        if(!window.confirm('Are you sure?')){
            return
        }
        //we delete only the last 10 items in translations array
        const [clearError, updatedUser] = await translationClearHistory(user)
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }
    return(
        <div className="profile-item-actions">
        <div className="actions-items">
            {/*<div className="actions-item"><Link to='/translations'>Translations</Link></div>*/}
            {/* the button should clear the translations from the API */}
            {/* the list from translation, exists in the component translation history, needs modifying to display the last ten translations*/}
            <button onClick={handleClearHistoryClick} id="clear-button">Clear history</button>
            <button onClick={handleLogoutClick} id="logout-button">Logout</button>
        </div>
        </div>
    )
}

export default ProfileActions