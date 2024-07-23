import { MuiCheckBoxGroup } from "../../../lib/main";
import FormX from "../wire/FormX";

const BasicSetup = `<MuiCheckBoxGroup
    attribute="CheckBoxGroup"
    options={{ 1: 'Tamilnadu', 2: 'Kerala' }}
    flexDirection="column"
/>
`;
const BasicCheckBoxGroup = () => {
    return (
        <FormX>
            <MuiCheckBoxGroup
                attribute="CheckBoxGroup"
                options={{ 1: 'Tamilnadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }}
                flexDirection="column"
            />
        </FormX>
    )
}

export { BasicSetup, BasicCheckBoxGroup }