import { MuiCheckBox } from "../../../lib/main";
import InfoBox from "../../components/boxLayout/InfoBox";
import FormX from "../../components/wire/FormX";

const Setup = `<MuiCheckBox attribute="checkBox" defaultValue={1} readonly/>
<MuiCheckBox attribute="checkBox" />
<MuiCheckBox attribute="checkBox" disabled/>
<MuiCheckBox attribute="checkBox" defaultValue={1} disabled/>
`;
const Checkbox = () => {
    return (
        <FormX>
            <MuiCheckBox attribute="checkBox" defaultValue={1} readonly />
            <MuiCheckBox attribute="checkBox" />
            <MuiCheckBox attribute="checkBox" disabled />
            <MuiCheckBox attribute="checkBox" defaultValue={1} disabled />
        </FormX>
    )
}
const CheckboxPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    CheckBox
                </span>
            </div>
            <div className="h3-container">
                <span className="h3">
                    Checkbox allow the user to select multiple items from a set.
                </span>
            </div>
            <div className="info-container info-checkbox-container">
                <div className="h2-container">
                    <span className="h2">
                        Basic CheckBox
                    </span>
                </div>
                <InfoBox setup={Setup} Components={[Checkbox]} />
            </div>
        </div>
    )
}

export default CheckboxPage;
