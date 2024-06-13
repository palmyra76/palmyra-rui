import { MuiIntegerField } from "../../../lib/main";
import FormX from "../wire/FormX";


const BasicSetup = `<MuiIntegerField
    attribute="int"
    label="Integer"
/>
`;

const BasicIntegerField = () => {
    return (
        <FormX>
            <MuiIntegerField attribute="int"
                label="Integer"
            />
        </FormX>
    )
}



export {
    BasicSetup, BasicIntegerField
}