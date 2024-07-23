import { MuiSlider } from "../../../lib/main";
import FormX from "../wire/FormX";


const BasicSetup = `<MuiSlider
    attribute="slider"
    label="Slider"
    defaultValue={40}
    sliderProps={{
        marks= true, disableSwap= true,
        valueLabelDisplay= 'on', min= 10, max= 50, step= 5
    }}
/>
`;

const BasicSlider = () => {
    return (
        <FormX>
            <MuiSlider attribute="slider"
                label="Slider"
                defaultValue={40}
                marks={true}
                disableSwap={true}
                valueLabelDisplay='on'
                min={10}
                max={50}
                step={5}
            />
        </FormX>
    )
}


export {
    BasicSetup, BasicSlider
}