import InfoBox from "../../components/boxLayout/InfoBox";
import { BasicSetup, BasicCheckBoxGroup } from "../../components/muiComponents/CheckBoxGroup";

const CheckboxGroupPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    CheckBox Group
                </span>
                <div className="h3">
                    Checkbox group allow the user to select multiple items from a set.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicCheckBoxGroup]} />
            </div>
        </div>
    )
}

export default CheckboxGroupPage;
