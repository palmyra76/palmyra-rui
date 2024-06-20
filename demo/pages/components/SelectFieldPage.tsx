import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicSelectField
} from "../../components/muiComponents/SelectField";


const SelectFieldPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Select Field
                </span>
                <div className="h3">
                    The Select field allows the user to select one option from a dropdown.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicSelectField]} />
            </div>
        </div>
    )
}

export default SelectFieldPage;