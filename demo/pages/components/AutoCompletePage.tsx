import { MuiAutoComplete } from "../../../lib/main";
import InfoBox from "../../components/boxLayout/InfoBox";
import FormX from "../../components/wire/FormX";

const Setup = `<MuiAutoComplete attribute="name" 
    placeHolder="Select Country" 
    variant="outlined"
    lookupOptions={{ attribute: "name" }} 
    eventListener={nameEventListener} 
    storeOptions={{ endPoint: inputLookupEndPoint, endPointOptions }}
/>
`;
const Autocomplete = () => {
    return (
        <FormX>
            <MuiAutoComplete attribute="name"
                placeHolder="Select Country"
                variant="outlined"
                lookupOptions={{ attribute: "name" }}
                storeOptions={{ endPoint: '' }}
            />
        </FormX>
    )
}
const AutoCompletePage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Auto Complete
                </span>
            </div>
            <div className="h3-container">
                <span className="h3">
                    The autocomplete is a normal text input enhanced by a panel of suggested options.
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={Setup} Components={[Autocomplete]} />
            </div>
        </div>
    )
}

export default AutoCompletePage;
