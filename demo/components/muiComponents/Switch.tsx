import { MuiSwitch } from "../../../lib/main";
import FormX from "../wire/FormX";


const BasicSetup = `<MuiSwitch
    attribute="switch"
    options={{ true: 'On', false: 'Off' }}
/>
`;

const BasicSwitch = () => {
    return (
        <FormX>
            <MuiSwitch attribute="switch"
                options={{ true: 'On', false: 'Off' }}
            />
        </FormX>
    )
}

const IosSwitchSetup = `<MuiSwitch
    attribute="switch"
    switch="IOSSwitch"
    options={{ true: 'On', false: 'Off' }}
/>
`;

const IosSwitch = () => {
    return (
        <FormX>
            <MuiSwitch attribute="switch" switch="IOSSwitch"
                options={{ true: 'On', false: 'Off' }}
            />
        </FormX>
    )
}

const Android12SwitchSetup = `<MuiSwitch
    attribute="switch"
    switch="Android12Switch"
    options={{ true: 'On', false: 'Off' }}
/>
`;

const Android12Switch = () => {
    return (
        <FormX>
            <MuiSwitch attribute="switch" switch="Android12Switch"
               options={{ true: 'On', false: 'Off' }}
            />

        </FormX>
    )
}
const MaterialUISwitchSetup = `<MuiSwitch
    attribute="switch"
    switch="MaterialUISwitch"
    options={{ true: 'On', false: 'Off' }}
/>
`;

const MaterialUISwitch = () => {
    return (
        <FormX>
            <MuiSwitch attribute="switch" switch="MaterialUISwitch"
               options={{ true: 'On', false: 'Off' }}
            />
        </FormX>
    )
}

export {
    BasicSetup, BasicSwitch, IosSwitchSetup, IosSwitch, Android12SwitchSetup, Android12Switch, MaterialUISwitchSetup, MaterialUISwitch
}