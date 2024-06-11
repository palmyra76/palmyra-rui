import { MuiTextField } from "../../../lib/main";
import FormX from "../wire/FormX";


const TypeValidationSetup = `<MuiTextField
    attribute="email"
    placeHolder="example@email.com"
    required={true}
    validation={{ type: "email", errorMsg: "Invalid Email" }}
    label="Email"
/>`;

const TypeValidationTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="email"
                placeHolder="example@email.com"
                required={true}
                validation={{ type: "email", errorMsg: "Invalid Email" }}
                label="Email"
            />
        </FormX>
    )
}


const LengthValidationSetup = `<MuiTextField
    attribute="name"
    placeHolder="Enter Name"
    label="Name"
    length={{ min: 3, max: 6, errorMsg: "Minimum 3 & Maximum 6 letters only allowed" }}
/>`;

const LengthValidationTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="name"
                placeHolder="Enter Name"
                label="Name"
                length={{ min: 3, max: 6, errorMsg: "Minimum 3 & Maximum 6 letters only allowed" }}
            />
        </FormX>
    )
}

const RegexValidationSetup = `<MuiTextField
    attribute="alphabet"
    placeHolder="Alphabet"
    label="Alphabet"
    validation={{ regex: /^[a-zA-Z]+$/, errorMsg: "Alphabets only allowed" }}
/>`;

const RegexValidationTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="alphabet"
                placeHolder="Alphabet"
                label="Alphabet"
                validation={{ regex: /^[a-zA-Z]+$/, errorMsg: "Alphabets only allowed" }}
            />
        </FormX>
    )
}

const FunctionValidationSetup = `
const customFn = (n: any): boolean => {
    if (isNaN(n)) {
        return false;
    } else {
        return true;
    }
}

<MuiTextField
    attribute="number"
    placeHolder="Number"
    label="Number"
    validation={{ validateFn: customFn, errorMsg: "Numbers only allowed" }}
/>`;

const FunctionValidationTextField = () => {

    const customFn = (n: any): boolean => {
        if (isNaN(n)) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <FormX>
            <MuiTextField
                attribute="number"
                placeHolder="Number"
                label="Number"
                validation={{ validateFn: customFn, errorMsg: "Numbers only allowed" }}
            />
        </FormX>
    )
}

export {
    TypeValidationSetup, TypeValidationTextField,
    LengthValidationSetup, LengthValidationTextField,
    RegexValidationSetup, RegexValidationTextField,
    FunctionValidationSetup, FunctionValidationTextField
}