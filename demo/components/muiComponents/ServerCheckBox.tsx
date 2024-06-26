import { MuiServerCheckBox } from "../../../lib/main";
import FormX from "../wire/FormX";

const BasicSetup = `<MuiServerCheckBox
    attribute="serverCheckbox"
    lookupOptions={{idAttribute: 'id', displayAttribute: "name"}}
    storeOptions={{endPoint: '/multiServerlookupData.json'}}
/>
`;

const BasicServerCheckBox = () => {
    return (
        <FormX>
            <MuiServerCheckBox
                attribute="serverCheckbox"
                lookupOptions={{idAttribute: 'id', displayAttribute: "name"}}
                storeOptions={{endPoint: '/multiServerlookupData.json'}}
                />
        </FormX>
    )
}


export { BasicSetup, BasicServerCheckBox }