import { MuiRadioGroup } from "../../../lib/main";
import FormX from "../wire/FormX";

const BasicSetup = `<MuiRadioGroup
    attribute="radio"
    options={{ true: 'On', false: 'Off' }}
    flexDirection="column"
/>
`;

const BasicRadioGroup = () => {
    return (
        <FormX>
            <MuiRadioGroup
                attribute="radio"
                options={{ true: 'On', false: 'Off' }}
                flexDirection="column"
            />
        </FormX>
    )
}


export { BasicSetup, BasicRadioGroup }