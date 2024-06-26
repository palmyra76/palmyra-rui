import InfoBox from "../../components/boxLayout/InfoBox";
import { BasicSetup, BasicServerCheckBox } from "../../components/muiComponents/ServerCheckBox";

const ServerCheckboxPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Server Check Box
                </span>
                <div className="h3">
                    Server checkbox allow the user to select multiple items from a server data.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicServerCheckBox]} />
            </div>
        </div>
    )
}

export default ServerCheckboxPage;
