import { MuiNumberField } from "../../../lib/main";
import FormX from "../wire/FormX";


const BasicSetup = `<MuiNumberField attribute="number" placeHolder="Enter Numbers only" variant="outlined" autoFocus={true} label="Number" />
<MuiNumberField attribute="number" placeHolder="Enter Numbers only" variant="filled" label="Number" />
<MuiNumberField attribute="number" placeHolder="Enter Numbers only" variant="standard" label="Number" />
`;

const BasicNumberField = () => {
    return (
        <FormX>
            <MuiNumberField attribute="number"
                placeHolder="Enter Numbers only"
                variant="outlined"
                autoFocus={true}
                label="Number"
            />
            <MuiNumberField attribute="number"
                placeHolder="Enter Numbers only"
                variant="filled"
                label="Number"
            />
            <MuiNumberField attribute="number"
                placeHolder="Enter Numbers only"
                variant="standard"
                label="Number"
            />
        </FormX>
    )
}

const RangeValidationSetup = `<MuiNumberField
    attribute="number"
    placeHolder="Enter Number"
    label="Number"
    range={{ start: 3, end: 6, errorMsg: "3-6 range" }}
/>

<MuiNumberField
    attribute="number"
    placeHolder="Enter Number"
    label="Number"
    range={{ end: 10, errorMsg: "10 is end range" }}
/>
             
<MuiNumberField
    attribute="number"
    placeHolder="Enter Number"
    label="Number"
    range={{ start: 30, errorMsg: "Start from 30 " }}
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
             <MuiNumberField
                attribute="number"
                placeHolder="Enter Number"
                label="Number"
                range={{ end: 10, errorMsg: "10 is end range" }}
            />
             <MuiNumberField
                attribute="number"
                placeHolder="Enter Number"
                label="Number"
                range={{ start: 30, errorMsg: "Start from 30 " }}
            />
        </FormX>
    )
}

const RegexValidationSetup = `<MuiNumberField
    attribute="number"
    placeHolder="Number"
    label="Number"
    regExp={/^\d{3}$/}
    errorMessage="3 digits only allowed"
/>`;

const RegexValidationNumberField = () => {
    return (
        <FormX>
            <MuiNumberField
                attribute="number"
                placeHolder="Number"
                label="Number"
                regExp={/^\d{3}$/}
                errorMessage="3 digits only allowed"
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
                validFn={customFn}
                errorMessage="Enter a number between 11 and 99"
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