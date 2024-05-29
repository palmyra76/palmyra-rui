import { MuiCheckBoxGroup } from "../../../lib/main";
import InfoBox from "../../components/boxLayout/InfoBox";
import FormX from "../../components/wire/FormX";

const Setup = `<MuiCheckBoxGroup 
        attribute="file" 
        title="File"
        options={{ upload: 'Upload Files', download: 'Download Files' }}
 />
`;
const GroupCheckBox = () => {
    return (
        <FormX>
            <MuiCheckBoxGroup attribute="file" title="File"
                options={{ upload: 'Upload Files', download: 'Download Files' }}
                required={true} />
        </FormX>
    )
}
const CheckboxGroupPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    CheckBox Group
                </span>
            </div>
            <div className="h3-container">
                <span className="h3">
                    The autocomplete is a normal text input enhanced by a panel of suggested options.
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={Setup} Components={[GroupCheckBox]} />
            </div>
        </div>
    )
}

export default CheckboxGroupPage;
