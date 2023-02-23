import { useEffect } from "react"
import ProfileActions from "../Components/profile/ProfileActions"
import ProfileHeader from "../Components/profile/ProfileHeader"
import ProfileTranslationHistory from "../Components/profile/ProfileTranslationHistory"
import { findUserById } from "../api/user"

import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"


const Profile = ()=>{
    const {user, setUser} = useUser()
    
    useEffect(()=>{
        const findUser = async ()=>{
            const [error,latestUser] = await findUserById(user.id)
            if(error===null){
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        findUser()
    },[setUser, user.id])

    return(
        <div className="profile">
        <h1>Profile</h1>
        {/* username(the left one) is a prop for the component ProfileHeader , if we go to the code of this component we will notice that this prop is used by this component*/}
        <ProfileHeader username={user.username}/>
        <ProfileActions />
        {/* Same as above, the props can be anything(from var to component)*/}
        <ProfileTranslationHistory translations={user.translations}/>
        </div>
    )
}
export default withAuth(Profile)