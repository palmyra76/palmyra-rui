import InfoBox from "../../components/boxLayout/InfoBox";
import { BasicSetup, BasicCheckBox, CustomIconSetup, CustomIconCheckBox } from "../../components/muiComponents/CheckBox";

const CheckboxPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Check Box
                </span>
                <div className="h3">
                    Checkbox allow the user to select multiple items from a set.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicCheckBox]} />
            </div>
            <div className="h2-container">
                <span className="h2">
                    Customize Icon
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={CustomIconSetup} Components={[CustomIconCheckBox]} />
            </div>
        </div>
    )
}

export default CheckboxPage;