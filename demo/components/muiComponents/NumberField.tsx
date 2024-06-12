import { MuiNumberField } from "../../../lib/main";
import FormX from "../wire/FormX";


const BasicSetup = `<MuiNumberField attribute="name" placeHolder="Enter Name" variant="outlined" autoFocus={true} label="Name" />
<MuiNumberField attribute="name" placeHolder="Enter Name" variant="filled" label="Name" />
<MuiNumberField attribute="name" placeHolder="Enter Name" variant="standard" label="Name" />
`;

const BasicNumberField = () => {
    return (
        <FormX>
            <MuiNumberField attribute="name"
                placeHolder="Enter Name"
                variant="outlined"
                autoFocus={true}
                label="Name"
            />
            <MuiNumberField attribute="name"
                placeHolder="Enter Name"
                variant="filled"
                label="Name"
            />
            <MuiNumberField attribute="name"
                placeHolder="Enter Name"
                variant="standard"
                label="Name"
            />
        </FormX>
    )
}

const RangeValidationSetup = `<MuiNumberField
    attribute="number"
    placeHolder="Enter Number"
    label="Number"
    range={{ start: 3, end: 6, errorMsg: "3-6 range" }}
/>`;

const RangeValidationNumberField = () => {
    return (
        <FormX>
            <MuiNumberField
                attribute="number"
                placeHolder="Enter Number"
                label="Number"
                range={{ start: 3, end: 6, errorMsg: "3-6 range" }}
            />
        </FormX>
    )
}

const RegexValidationSetup = `<MuiNumberField
    attribute="number"
    placeHolder="Number"
    label="Number"
    validation={{ regex: /^\d{3}$/, errorMsg: "3 digits only allowed" }}
/>`;

const RegexValidationNumberField = () => {
    return (
        <FormX>
            <MuiNumberField
                attribute="number"
                placeHolder="Number"
                label="Number"
                validation={{ regex: /^\d{3}$/, errorMsg: "3 digits only allowed" }}
            />
        </FormX>
    )
}

const FunctionValidationSetup = `
const customFn = (n: any): boolean => {
    if (n >= 11 && n <= 99) {
        return true;
    } else {
        return false;
    }
}

<MuiNumberField
    attribute="number"
    placeHolder="Number"
    label="Number"
    validation={{ validateFn: customFn, errorMsg: "Enter a number between 11 and 99" }}
/>`;

const FunctionValidationNumberField = () => {

    const customFn = (n: any): boolean => {
        if (n >= 11 && n <= 99) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <FormX>
            <MuiNumberField
                attribute="number"
                placeHolder="Number"
                label="Number"
                validation={{ validateFn: customFn, errorMsg: "Enter a number between 11 and 99" }}
            />
        </FormX>
    )
}

export {
    BasicSetup, BasicNumberField,
    RangeValidationSetup, RangeValidationNumberField,
    RegexValidationSetup, RegexValidationNumberField,
    FunctionValidationSetup, FunctionValidationNumberField,
}