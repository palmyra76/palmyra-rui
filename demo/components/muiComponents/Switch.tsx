import { MuiIOSSwitch, MuiSwitch } from "../../../lib/main";
import FormX from "../wire/FormX";


const BasicSetup = `<MuiSwitch
    attribute="switch"
    options={{ 'On': 'true', 'Off': 'false' }}
/>
`;

const BasicSwitch = () => {
    return (
        <FormX>
            <MuiSwitch attribute="switch"
                options={{ 'On': 'true', 'Off': 'false' }}
            />
        </FormX>
    )
}

const IosSwitchSetup = `<MuiIOSSwitch
    attribute="switch"
    options={{ 'On': 'true', 'Off': 'false' }}
/>
`;

const IosSwitch = () => {
    return (
        <FormX>
            <MuiIOSSwitch attribute="switch"
                options={{ 'On': 'true', 'Off': 'false' }}
            />
        </FormX>
    )
}

export {
    BasicSetup, BasicSwitch, IosSwitchSetup, IosSwitch
}