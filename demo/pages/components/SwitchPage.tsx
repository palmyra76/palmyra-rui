import InfoBox from "../../components/boxLayout/InfoBox";
import {
    Android12Switch,
    Android12SwitchSetup,
    BasicSetup, BasicSwitch,
    IosSwitch, IosSwitchSetup,
    MaterialUISwitch,
    MaterialUISwitchSetup
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

            <div className="h2-container">
                <span className="h2">
                    Android12 Switch
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={Android12SwitchSetup} Components={[Android12Switch]} />
            </div>

            <div className="h2-container">
                <span className="h2">
                    Material UI Switch
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={MaterialUISwitchSetup} Components={[MaterialUISwitch]} />
            </div>
        </div>
    )
}

export default SwitchPage;