import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicPassword
} from "../../components/muiComponents/Password.tsx";


const PasswordPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Password Field
                </span>
                <div className="h3">
                    Users can input password within Password Field.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicPassword]} />
            </div>
        </div>
    )
}

export default PasswordPage;