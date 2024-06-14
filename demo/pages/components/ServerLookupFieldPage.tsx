import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicServerLookup
} from "../../components/muiComponents/ServerLookup";


const ServerLookupFieldPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Server Lookup
                </span>
                <div className="h3">
                    Users can select an server item in the drop-down list.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicServerLookup]} />
            </div>
        </div>
    )
}

export default ServerLookupFieldPage;