import { MuiSelect } from "../../../lib/main";
import FormX from "../wire/FormX";

const BasicSetup = `<MuiSelect
    attribute="select"
    options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }}
/>
`;

const BasicSelectField = () => {
    return (
        <FormX>
            <MuiSelect
                attribute="select"
                options={{ 1: 'Tamil Nadu', 2: 'Kerala', 3: 'Maharastra', 4: 'Karnataka' }}
            />
        </FormX>
    )
}


export { BasicSetup, BasicSelectField }