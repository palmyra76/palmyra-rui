import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicDatePicker,
    ValidationSetup,
    ValidationDatePicker
} from "../../components/muiComponents/DatePicker";


const DatePickerPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Date Picker
                </span>
                <div className="h3">
                    Users can select a date within Date Picker.
                </div>
            </div>
            <div className="h2-container">
                <span className="h2">
                    Basic Date Picker
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicDatePicker]} />
            </div>
            <div className="h2-container">
                <span className="h2">
                    Validation
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={ValidationSetup} Components={[ValidationDatePicker]} />
            </div>
        </div>
    )
}

export default DatePickerPage;