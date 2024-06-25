import InfoBox from "../../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicView
} from "../../../components/muiComponents/viewComponenents/View";


const ViewPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    View
                </span>
                <div className="h3">
                    View is used to display the data to the user.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicView]} />
            </div>
        </div>
    )
}

export default ViewPage;