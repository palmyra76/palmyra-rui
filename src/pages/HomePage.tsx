import { Button } from "@mui/material";
import { createFormData } from "../../lib/palmyra/form/PalmyraFormManager";
import MuiTextField from "../../lib/palmyra/mui/form/MuiTextField";
import { useState } from "react";
import MuiTextArea from "../../lib/palmyra/mui/form/MuiTextArea";
import MuiSelect from "../../lib/palmyra/mui/form/MuiSelect";
import MuiRadioGroup from "../../lib/palmyra/mui/form/MuiRadioGroup";
import MuiDatePicker from "../../lib/palmyra/mui/form/MuiDatePicker";


const HomePage = () => {

    const [isValid, setValid] = useState(false);
    const [data, setData] = useState({ port: '2022', dob: '2023-10-19', gender: 'M' });

    const onValidityChange = (valid: boolean): void => {
        if (valid != undefined)
            setValid(valid);
        console.log("validity changed to " + isFormValid());
        console.log(getFormData());
    }

    var { getFieldManager, getFormData, isFormValid } = createFormData(data, onValidityChange, "new");

    return (<>
        <MuiTextField attribute="serverHost"
            placeHolder="welcome"
            length={{ min: 3, message: "Minimum of 3 letters" }}
            getFieldManager={getFieldManager}
        ></MuiTextField>

        <MuiSelect attribute="gender"
            options={{ M: 'Male', F: 'Female' }}
            getFieldManager={getFieldManager}
        ></MuiSelect>

        <MuiRadioGroup attribute="gender"
            options={{ M: 'Male', F: 'Female' }}
            getFieldManager={getFieldManager}
        ></MuiRadioGroup>

        <MuiDatePicker attribute="dob"
            getFieldManager={getFieldManager}
        ></MuiDatePicker>

        <MuiTextArea attribute="port"
            length={{ min: 3, message: "Minimum of 3 letters" }}
            required={true}
            getFieldManager={getFieldManager}
        ></MuiTextArea>
        <Button disabled={!isValid} onClick={() => { console.log("submitting data", getFormData()) }}>Test Me</Button>
    </>
    )
}

export default HomePage;