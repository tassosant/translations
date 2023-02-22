import TranslationForm from "../Components/translations/TranslationForm"
import { IndividualSignImageItem } from "../Components/translations/IndividualSignImageItem"
import withAuth from "../hoc/withAuth"

const Translation = ()=>{
    return(
        <>
        // import as a component the translations input text field, the button which translates and the box where translation images will appear
        // 
        <h1>Translations</h1>
        <section>
            <TranslationForm></TranslationForm>
            {/* works */}
            {/* <IndividualSignImageItem imageItem='a.png'></IndividualSignImageItem> */}
        </section>
        </>
    )
}
export default withAuth(Translation)