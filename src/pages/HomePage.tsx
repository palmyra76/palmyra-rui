import { Button } from "@mui/material";
import { createFormData } from "../../lib/palmyra/form/PalmyraFormManager";
import MuiTextField from "../../lib/palmyra/mui/form/MuiTextField";
import { useState } from "react";


const HomePage = () => {

    const [isValid, setValid] = useState(false);
    const [data, setData] = useState({ serverHost: 'server', port: '2022' });

    const onValidityChange = (valid: boolean): void => {
        if (valid != undefined)
            setValid(valid);
        console.log("validity changed to " + isFormValid());
        console.log(getFormData());
    }

    var { getFieldManager, getFormData, isFormValid } = createFormData(data, onValidityChange, "new");

    return (<>
        <MuiTextField attribute="serverHost" type="string" title="ServerHost"
            length={{ min: 3, message: "Minimum of 3 letters" }}
            getFieldManager={getFieldManager}
        ></MuiTextField>

        <MuiTextField attribute="port" type="number" title="ServerHost"
            length={{ min: 3, message: "Minimum of 3 letters" }}
            required={true}
            getFieldManager={getFieldManager}
        ></MuiTextField>
        <Button disabled={!isValid} onClick={() => {console.log("submitting data", getFormData())}}>Test Me</Button>
    </>
    )
}

export default HomePage;