import InfoBox from "../../components/boxLayout/InfoBox";
import {
    BasicSetup, BasicSlider
} from "../../components/muiComponents/Slider";


const SliderPage = () => {
    return (
        <div>
            <div className="h1-container">
                <span className="h1">
                    Slider
                </span>
                <div className="h3">
                    Sliders allow users to make selections from a range of values.
                </div>
            </div>
            <div className="info-container">
                <InfoBox setup={BasicSetup} Components={[BasicSlider]} />
            </div>
        </div>
    )
}

export default SliderPage;