import { IFieldEventListener, IFieldValueListener, MuiTextField } from "../../../lib/main";
import FormX from "../wire/FormX";

const customFn = (n: any): boolean => {
    if (isNaN(n)) {
        return false;
    } else {
        return true;
    }
}

const BasicSetup = `<MuiTextField attribute="name" placeHolder="Enter Name" variant="outlined" autoFocus={true} label="Name" labelMode="header" />
<MuiTextField attribute="name" placeHolder="Enter Name" variant="filled" label="Name" labelMode="title" fieldProps={{ size: 'small' }} />
<MuiTextField attribute="name" placeHolder="Enter Name" variant="standard" label="Name" required missingMessage="Required" />
`;

const BasicTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="name"
                placeHolder="Enter Name"
                variant="outlined"
                autoFocus={true}
                label="Name"
                labelMode="header"
            />
            <MuiTextField attribute="name"
                placeHolder="Enter Name"
                variant="filled"
                label="Name"
                labelMode="title"
                fieldProps={{ size: 'small' }}
            />
            <MuiTextField attribute="name"
                placeHolder="Enter Name"
                variant="standard"
                label="Name"
                required
                missingMessage="Required"
            />
        </FormX>
    )
}

const TypeValidationSetup = `<MuiTextField
    attribute="email"
    placeHolder="example@email.com"
    required={true}
    label="Email"
    validRule={"email"}
    errorMessage={"Invalid Email"}
/>`;

const TypeValidationTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="email"
                placeHolder="example@email.com"
                required={true}
                validRule={"email"}
                errorMessage={"Invalid Email"}
                label="Email"
            />
        </FormX>
    )
}


const LengthValidationSetup = `<MuiTextField
    attribute="name"
    placeHolder="Enter Name"
    label="Name"
    length={{ min: 3, max: 6, errorMessage: "Minimum 3 & Maximum 6 letters only allowed" }}
/>

<MuiTextField
    attribute="name"
    placeHolder="Enter Name"
    label="Name"
    length={{ min: 2, errorMessage: "Minimum 2 letters only allowed" }}
/>

<MuiTextField
    attribute="name"
    placeHolder="Enter Name"
    label="Name"
    length={{ max: 4, errorMessage: "Maximum 4 letters only allowed" }}
/>`;

const LengthValidationTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="name"
                placeHolder="Enter Name"
                label="Name"
                length={{ min: 3, max: 6, errorMessage: "Minimum 3 & Maximum 6 letters only allowed" }}
            />
            <MuiTextField
                attribute="name"
                placeHolder="Enter Name"
                label="Name"
                length={{ min: 2, errorMessage: "Minimum 2 letters only allowed" }}
            />
            <MuiTextField
                attribute="name"
                placeHolder="Enter Name"
                label="Name"
                length={{ max: 4, errorMessage: "Maximum 4 letters only allowed" }}
            />
        </FormX>
    )
}

const RegexValidationSetup = `<MuiTextField
    attribute="alphabet"
    placeHolder="Alphabet"
    label="Alphabet"
    regExp={/^[a-zA-Z]+$/}
    errorMessage={"Alphabets only allowed"}
/>`;

const RegexValidationTextField = () => {
    return (
        <FormX>
            <MuiTextField
                attribute="alphabet"
                placeHolder="Alphabet"
                label="Alphabet"
                regExp={/^[a-zA-Z]+$/}
                errorMessage={"Alphabets only allowed"}
            />
        </FormX>
    )
}

const FunctionValidationSetup = `const customFn = (n: any): boolean => {
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
    validFn={customFn}
    errorMessage="Numbers only allowed"
/>`;

const FunctionValidationTextField = () => {

    return (
        <FormX>
            <MuiTextField
                attribute="number"
                placeHolder="Number"
                label="Number"
                validFn={customFn}
                errorMessage="Numbers only allowed"
            />
        </FormX>
    )
}

const EventListenerSetup = `const onChangeEventListener: IFieldEventListener = {
    onChange: function(key, value): void {
        console.log(key, value)
    }
}

const onBlurEventListener: IFieldEventListener = {
    onBlur: function(key, value): void {
        console.log(key, value)
    }
}

<MuiTextField
    attribute="name"
    label="Name"
    eventListener={onChangeEventListener}
/>

<MuiTextField
    attribute="city"
    label="City Name"
    eventListener={onBlurEventListener}
/>`;


const EventListenerTextField = () => {

    const onChangeEventListener: IFieldEventListener = {
        onChange: function (key, value, valid): void {
            console.log(key, value, valid)
        }
    }

    const onBlurEventListener: IFieldEventListener = {
        onBlur: function (key, value, valid): void {
            console.log(key, value, valid)
        }
    }

    return (
        <FormX>
            <MuiTextField
                attribute="name"
                label="Name"
                eventListener={onChangeEventListener}
            />
            <MuiTextField
                attribute="city"
                label="City Name"
                eventListener={onBlurEventListener}
            />
        </FormX>
    )
}

const ValueListenerSetup = `const onValueEventListener: IFieldValueListener = {
    onValue: function (key, value, valid): void {
        console.log(key, value, valid)
    }
}

<MuiTextField
     attribute="name"
     label="Name"
     valueListener={onValueEventListener}
/>`;

const ValueListenerTextField = () => {

    const onValueEventListener: IFieldValueListener = {
        onValue: function (key, value, valid): void {
            console.log(key, value, valid)
        }
    }

    return (
        <FormX>
            <MuiTextField
                attribute="name"
                label="Name"
                valueListener={onValueEventListener}
            />
        </FormX>
    )
}

const CombinationValidationSetup = `
/>`;

const CombinationValidationTextField = () => {
    return (
        <FormX>
            {/* <MuiTextField
                attribute="data"
                label="Rule & Length"
                validRule={"oneLowerCase"}
                length={{ min: 5 }}
                errorMessage={{ "oneLowerCase": "One lower case", "length": "Minimum 5" }}
            /> */}
             <MuiTextField
                attribute="data"
                label="Rule & Regular Expression"
                validRule={"mobilePhone"}
                regExp={/^([1-5])$/}
                errorMessage={{ "mobilePhone": "Invalid Phone Number", "regExp": "Range 1-5" }}
            />
            <MuiTextField
                attribute="data"
                label="Regular Expression & Length"
                regExp={/^[a-zA-Z]+$/}
                length={{ max: 5 }}
                errorMessage={{ "regExp": "Alphabets only allowed", "length": "Maximum 5" }}
            />

            <MuiTextField
                attribute="data"
                label="Function & Regular expression"
                validFn={customFn}
                regExp={/^([1-9]|1[012])$/}
                errorMessage={{ "validFn": "Numbers only allowed", "regExp": "Range 1-12" }}
            />

            <MuiTextField
                attribute="data"
                label="Function & Length"
                validFn={customFn}
                length={{ min: 4 }}
                errorMessage={{ "validFn": "Numbers only allowed", "length": "Minimum 4" }}
            />

        </FormX>
    )
}



export {
    BasicSetup, BasicTextField,
    TypeValidationSetup, TypeValidationTextField,
    LengthValidationSetup, LengthValidationTextField,
    RegexValidationSetup, RegexValidationTextField,
    FunctionValidationSetup, FunctionValidationTextField,
    EventListenerSetup, EventListenerTextField,
    ValueListenerSetup, ValueListenerTextField,
    CombinationValidationSetup, CombinationValidationTextField
}