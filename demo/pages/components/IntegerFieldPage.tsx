import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicIntegerField
} from "../../components/muiComponents/IntegerField";


const IntegerFieldPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Integer Field
                </span>
                <div className="h3">
                    Users can input and edit only Integer within Integer Fields.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicIntegerField]} />
            </div>
        </div>
    )
}

export default IntegerFieldPage;