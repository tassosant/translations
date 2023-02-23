import TranslationForm from "../Components/translations/TranslationForm"
import { IndividualSignImageItem } from "../Components/translations/IndividualSignImageItem"
import withAuth from "../hoc/withAuth"

const Translation = ()=>{
    return(
        <div className="translation-form">
        {/* // import as a component the translations input text field, the button which translates and the box where translation images will appear */}
        <div className="translation-form item">
        <h1>Translations</h1>
        </div>
        <div className="translation-form item">
        
            <TranslationForm></TranslationForm>
            {/* works */}
            {/* <IndividualSignImageItem imageItem='a.png'></IndividualSignImageItem> */}
        
        </div>
        </div>
    )
}
export default withAuth(Translation)