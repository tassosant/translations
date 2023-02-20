import ProfileActions from "../Components/profile/ProfileActions"
import ProfileHeader from "../Components/profile/ProfileHeader"
import ProfileTranslationHistory from "../Components/profile/ProfileTranslationHistory"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const Profile = ()=>{
    const {user, setUser} = useUser()
    const logout = ()=>{
        storageSave(STORAGE_KEY_USER, null)
        setUser(null)

    }
    return(
        <>
        <h1>Profile</h1>
        {/* username(the left one) is a prop for the component ProfileHeader , if we go to the code of this component we will notice that this prop is used by this component*/}
        <ProfileHeader username={user.username}/>
        <ProfileActions logout={logout}/>
        {/* Same as above, the props can be anything(from var to component)*/}
        <ProfileTranslationHistory translations={user.translations}/>
        </>
    )
}
export default withAuth(Profile)