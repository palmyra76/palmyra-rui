import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicRadioGroup
} from "../../components/muiComponents/RadioGroup";


const RadioGroupPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Radio Group
                </span>
                <div className="h3">
                    The Radio Group allows the user to select one option from a set.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicRadioGroup]} />
            </div>
        </div>
    )
}

export default RadioGroupPage;