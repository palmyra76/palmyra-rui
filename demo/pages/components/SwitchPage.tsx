import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicSwitch, IosSwitch, IosSwitchSetup
} from "../../components/muiComponents/Switch";


const SwitchPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Switch
                </span>
                <div className="h3">
                    Switches toggle the state of a single setting on or off.
                </div>
            </div>
            <div className="h2-container">
                <span className="h2">
                    Basic Switch
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicSwitch]} />
            </div>
            <div className="h2-container">
                <span className="h2">
                    IOS Switch
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={IosSwitchSetup} Components={[IosSwitch]} />
            </div>
        </div>
    )
}

export default SwitchPage;