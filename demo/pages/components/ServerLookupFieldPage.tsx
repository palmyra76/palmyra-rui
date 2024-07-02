import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicServerLookup,
    MultiServerLookupSetup,
    MultiServerLookup
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
            <div className="h2-container">
                <span className="h2">
                    Basic Server Lookup
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicServerLookup]} />
            </div>
            <div className="h2-container">
                <span className="h2">
                    Multi Server Lookup
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={MultiServerLookupSetup} Components={[MultiServerLookup]} />
            </div>
        </div>
    )
}

export default ServerLookupFieldPage;