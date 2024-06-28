import { IFieldEventListener, IFieldValueListener, MuiTextField } from "../../../lib/main";
import FormX from "../wire/FormX";


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
    length={{ min: 3, max: 6, errorMsg: "Minimum 3 & Maximum 6 letters only allowed" }}
/>

<MuiTextField
    attribute="name"
    placeHolder="Enter Name"
    label="Name"
    length={{ min: 2, errorMsg: "Minimum 2 letters only allowed" }}
/>

<MuiTextField
    attribute="name"
    placeHolder="Enter Name"
    label="Name"
    length={{ max: 4, errorMsg: "Maximum 4 letters only allowed" }}
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
            <MuiTextField
                attribute="name"
                placeHolder="Enter Name"
                label="Name"
                length={{ min: 2, errorMsg: "Minimum 2 letters only allowed" }}
            />
            <MuiTextField
                attribute="name"
                placeHolder="Enter Name"
                label="Name"
                length={{ max: 4, errorMsg: "Maximum 4 letters only allowed" }}
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

export {
    BasicSetup, BasicTextField,
    TypeValidationSetup, TypeValidationTextField,
    LengthValidationSetup, LengthValidationTextField,
    RegexValidationSetup, RegexValidationTextField,
    FunctionValidationSetup, FunctionValidationTextField,
    EventListenerSetup, EventListenerTextField,
    ValueListenerSetup, ValueListenerTextField
}