import { MuiTextArea } from "../../../lib/main";
import FormX from "../wire/FormX";

const BasicSetup = `<MuiTextArea attribute="address" placeHolder="Address" variant="outlined" autoFocus={true} label="Address" />
<MuiTextArea attribute="address" placeHolder="Address" variant="filled" label="Address" />
`;

const BasicTextArea = () => {
    return (
        <FormX>
            <MuiTextArea attribute="address"
                placeHolder="Address"
                variant="outlined"
                autoFocus={true}
                label="Address"
            />
            <MuiTextArea attribute="address"
                placeHolder="Address"
                variant="filled"
                label="Address"
            />
             <MuiTextArea attribute="address"
                placeHolder="Address"
                label="Address"
            />
        </FormX>
    )
}


export { BasicSetup, BasicTextArea }