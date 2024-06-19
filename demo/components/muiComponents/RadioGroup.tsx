import { MuiRadioGroup } from "../../../lib/main";
import FormX from "../wire/FormX";

const BasicSetup = `<MuiRadioGroup
    attribute="radio"
    options={{ 'true': 'On', 'false': 'Off' }}
/>
`;

const BasicRadioGroup = () => {
    return (
        <FormX>
            <MuiRadioGroup
                attribute="radio"
                options={{ 'true': 'On', 'false': 'Off' }}
            />
        </FormX>
    )
}


export { BasicSetup, BasicRadioGroup }