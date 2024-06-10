import { MuiTextField } from "../../../lib/main";
import FormX from "../wire/FormX";

const BasicSetup = `<MuiTextField attribute="name" placeHolder="Enter Name" variant="outlined" autoFocus={true} label="Name" />
<MuiTextField attribute="name" placeHolder="Enter Name" variant="filled" label="Name" />
<MuiTextField attribute="name" placeHolder="Enter Name" variant="standard" label="Name" />
`;

const BasicTextField = () => {
    return (
        <FormX>
            <MuiTextField attribute="name"
                placeHolder="Enter Name"
                variant="outlined"
                autoFocus={true}
                label="Name"
            />
            <MuiTextField attribute="name"
                placeHolder="Enter Name"
                variant="filled"
                label="Name"
            />
            <MuiTextField attribute="name"
                placeHolder="Enter Name"
                variant="standard"
                label="Name"
            />
        </FormX>
    )
}

const ValidationSetup = `<MuiTextField attribute="email" placeHolder="example@email.com"  required={true} validationRule={"email"} errorMessage={{ rule: "Invalid Email" }} label="Email" />

<MuiTextField attribute="name" placeHolder="Enter Name" label="Name" length={{ min: 3, max: 6, message: "Minimum 3 & Maximum 6 letters only allowed" }} />
`;

const ValidationTextField = () => {
    return (
        <FormX>
            <MuiTextField attribute="email"
                placeHolder="example@email.com"
                variant="outlined"
                required={true}
                validationRule={"email"}
                errorMessage={{ rule: "Invalid Email" }}
                label="Email"
            />
            <MuiTextField attribute="name"
                placeHolder="Enter Name"
                variant="filled"
                label="Name"
                length={{ min: 3, max: 6, message: "Minimum 3 & Maximum 6 letters only allowed" }}
            />
        </FormX>
    )
}

export { BasicSetup, ValidationSetup, BasicTextField, ValidationTextField }