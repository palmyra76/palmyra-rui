import { MuiSwitch } from "../../../lib/main";
import FormX from "../wire/FormX";


const BasicSetup = `<MuiSwitch
    attribute="switch"
    options={{  'On': true,  'Off': false }}
/>
`;

const BasicSwitch = () => {
    return (
        <FormX>
            <MuiSwitch attribute="switch"
                options={{ 'On': true, 'Off': false }}
            />
        </FormX>
    )
}

const IosSwitchSetup = `<MuiSwitch
    attribute="switch"
    switch="IOSSwitch"
    options={{  'On': true,  'Off': false }}
/>
`;

const IosSwitch = () => {
    return (
        <FormX>
            <MuiSwitch attribute="switch" switch="IOSSwitch"
                options={{ 'On': true, 'Off': false }}
            />
        </FormX>
    )
}

const Android12SwitchSetup = `<MuiSwitch
    attribute="switch"
    switch="Android12Switch"
    options={{  'On': true,  'Off': false }}
/>
`;

const Android12Switch = () => {
    return (
        <FormX>
            <MuiSwitch attribute="switch" switch="Android12Switch"
                options={{ 'On': true, 'Off': false }}
            />

        </FormX>
    )
}
const MaterialUISwitchSetup = `<MuiSwitch
    attribute="switch"
    switch="MaterialUISwitch"
    options={{  'On': true,  'Off': false }}
/>
`;

const MaterialUISwitch = () => {
    return (
        <FormX>
            <MuiSwitch attribute="switch" switch="MaterialUISwitch"
                options={{ 'On': true, 'Off': false }}
            />
        </FormX>
    )
}

export {
    BasicSetup, BasicSwitch, IosSwitchSetup, IosSwitch, Android12SwitchSetup, Android12Switch, MaterialUISwitchSetup, MaterialUISwitch
}