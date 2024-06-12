import InfoBox from "../../components/boxLayout/InfoBox";
import { BasicSetup, BasicTextArea } from "../../components/muiComponents/TextArea.tsx";

const TextAreaPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Text Area
                </span>
                <div className="h3">
                    Users can input and edit text within Text Area.
                </div>
            </div>
            <div className="h2-container">
                <span className="h2">
                    Basic Text Field
                </span>
            </div>
            <div className="doc-para">Three variants: outlined, filled, and standard(default).</div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicTextArea]} />
            </div>
        </div>
    )
}

export default TextAreaPage;