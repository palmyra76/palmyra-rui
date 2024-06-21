import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicDateTimePicker,
    ValidationSetup,
    ValidationDateTimePicker
} from "../../components/muiComponents/DateTimePicker";


const DateTimePickerPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Date Time Picker
                </span>
                <div className="h3">
                    Users can select a  a date and time within Date Time Picker.
                </div>
            </div>
            <div className="h2-container">
                <span className="h2">
                    Basic Date Time Picker
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicDateTimePicker]} />
            </div>
            <div className="h2-container">
                <span className="h2">
                    Validation
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={ValidationSetup} Components={[ValidationDateTimePicker]} />
            </div>
        </div>
    )
}

export default DateTimePickerPage;