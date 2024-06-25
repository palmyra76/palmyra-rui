import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicRatingField,
    CustomIconSetup,
    CustomIconRatingField
} from "../../components/muiComponents/RatingField.tsx";


const RatingFieldPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Rating
                </span>
                <div className="h3">
                    Ratings show what others think and let you share your own opinion.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicRatingField]} />
            </div>
            <div className="h2-container">
                <span className="h2">
                    Customize Icon
                </span>
            </div>
            <div className="info-container">
                <InfoBox setup={CustomIconSetup} Components={[CustomIconRatingField]} />
            </div>
        </div>
    )
}

export default RatingFieldPage;