import InfoBox from "../../components/boxLayout/InfoBox";
import {
    FunctionValidationSetup, FunctionValidationTextField,
    LengthValidationSetup, LengthValidationTextField, RegexValidationSetup,
    RegexValidationTextField, TypeValidationSetup, TypeValidationTextField,
    EventListenerSetup,
    EventListenerTextField,
    ValueListenerSetup,
    ValueListenerTextField,
    CombinationValidationSetup,
    CombinationValidationTextField
} from "../../components/muiComponents/TextField";
import { BasicSetup, BasicTextField } from "../../components/muiComponents/TextField";


const TextFieldPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Text Field
                </span>
                <div className="h3">
                    Users can input and edit text within Text Fields.
                </div>
            </div>
            <div className="h2-container">
                <span className="h2">
                    Basic Text Field
                </span>
            </div>
            <div className="doc-para">Three variants: outlined, filled, and standard(default).</div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicTextField]} />
            </div>
            <div className="h2-container">
                <span className="h2">
                    Validation
                </span>
            </div>
            <div className="h3-container">
                <span className="h3">
                    Type Validation
                </span>
            </div>
            <div className="doc-para">Some Default types "email", "mobilePhone", "alphabets", "string" etc.</div>
            <div className="info-container">
                <InfoBox setup={TypeValidationSetup} Components={[TypeValidationTextField]} />
            </div>

            <div className="h3-container">
                <span className="h3">
                    Length Validation
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={LengthValidationSetup} Components={[LengthValidationTextField]} />
            </div>

            <div className="h3-container">
                <span className="h3">
                    Regex Validation
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={RegexValidationSetup} Components={[RegexValidationTextField]} />
            </div>

            <div className="h3-container">
                <span className="h3">
                    Custom Function Validation
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={FunctionValidationSetup} Components={[FunctionValidationTextField]} />
            </div>

            <div className="h3-container">
                <span className="h3">
                    Combination of Validation
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={CombinationValidationSetup} Components={[CombinationValidationTextField]} />
            </div>

            <div className="h2-container">
                <span className="h2">
                    Listener
                </span>
            </div>
            <div className="h3-container">
                <span className="h3">
                    Event Listener
                </span>
            </div>
            <div className="doc-para">Two event listener: onChange, onBlur.</div>
            <div className="info-container">
                <InfoBox setup={EventListenerSetup} Components={[EventListenerTextField]} />
            </div>
            <div className="h3-container">
                <span className="h3">
                    Value Listener
                </span>
            </div>
            <div className="doc-para">Value listener: onValue.</div>
            <div className="info-container">
                <InfoBox setup={ValueListenerSetup} Components={[ValueListenerTextField]} />
            </div>
        </div>
    )
}

export default TextFieldPage;