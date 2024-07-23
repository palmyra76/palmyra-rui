import InfoBox from "../../components/boxLayout/InfoBox";
import {
    FunctionValidationSetup, FunctionValidationNumberField,
    RangeValidationSetup, RangeValidationNumberField,
    RegexValidationSetup, RegexValidationNumberField,
    BasicSetup,
    BasicNumberField
} from "../../components/muiComponents/NumberField";


const NumberFieldPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Number Field
                </span>
                <div className="h3">
                    Users can input and edit number within Number Fields.
                </div>
            </div>
            <div className="h2-container">
                <span className="h2">
                    Basic Number Field
                </span>
            </div>
            <div className="doc-para">Three variants: outlined, filled, and standard(default).</div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicNumberField]} />
            </div>
            <div className="h2-container">
                <span className="h2">
                    Validation
                </span>
            </div>
            <div className="h3-container">
                <span className="h3">
                    Range Validation
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={RangeValidationSetup} Components={[RangeValidationNumberField]} />
            </div>

            <div className="h3-container">
                <span className="h3">
                    Regex Validation
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={RegexValidationSetup} Components={[RegexValidationNumberField]} />
            </div>

            <div className="h3-container">
                <span className="h3">
                    Custom Function Validation
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={FunctionValidationSetup} Components={[FunctionValidationNumberField]} />
            </div>
        </div>
    )
}

export default NumberFieldPage;