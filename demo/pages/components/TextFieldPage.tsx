import InfoBox from "../../components/boxLayout/InfoBox";
import { BasicSetup, BasicTextField, ValidationSetup, ValidationTextField } from "../../components/muiComponents/TextField";

const TextFieldPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Text Field
                </span>
            </div>
            <div className="h3-container">
                <span className="h3">
                    Users can input and edit text within Text Fields.
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicTextField]} />
            </div>
            <div className="h2-container">
                <span className="h2">
                    Validation
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={ValidationSetup} Components={[ValidationTextField]} />
            </div>
        </div>
    )
}

export default TextFieldPage;