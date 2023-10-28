import { Button } from "@mui/material";
import { createFormData } from "../../lib/palmyra/form/PalmyraFormManager";
import MuiTextField from "../../lib/palmyra/mui/form/MuiTextField";
import { useEffect, useState } from "react";
import MuiTextArea from "../../lib/palmyra/mui/form/MuiTextArea";
import MuiSelect from "../../lib/palmyra/mui/form/MuiSelect";
import MuiRadioGroup from "../../lib/palmyra/mui/form/MuiRadioGroup";
import MuiDatePicker from "../../lib/palmyra/mui/form/MuiDatePicker";
import { MuiServerLookup } from "../../lib/main";
import { StoreFactoryContext } from "../../lib/palmyra/layout/flexiLayout/FlexiLayoutContext";
import { AppStoreFactory } from "../components/store/AppStoreFactory";
import { ErrorBoundary } from "../../lib/palmyra/layout/ErrorBoundary";


const HomePage = () => {

    const [isValid, setValid] = useState(false);    
    const [data, setData] = useState({});

    const onValidityChange = (valid: boolean): void => {
        // if (valid != undefined)
        //     setValid(valid);

        setValid(!isValid);

        console.log("validity changed to " + isFormValid());
        console.log(getFormData());
    }


    useEffect(() => {
        setTimeout(() => {
            console.log('updating')
            setData({ serverHost: 'google.com', port: '2022', dob: '2023-10-19', gender: 'M' });
        }, 2000);
    }, [])

    const storeFactory = new AppStoreFactory();

    console.log(data);
    var { getFieldManager, getFormData, isFormValid } = createFormData(data, onValidityChange, "new");

    return (<>
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <StoreFactoryContext.Provider value={storeFactory}>
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

                <MuiServerLookup attribute="service" getFieldManager={getFieldManager} required={true}
                    lookupOptions={{ idAttribute: "id", displayAttribute:"userName" }} storeOptions={{ endPoint: "/api/data/fetchMe" }}
                ></MuiServerLookup>

                <Button disabled={!isValid} onClick={() => { console.log("submitting data", getFormData()) }}>Test Me</Button>

                <Button onClick={() => { onValidityChange(false) }}>Toggle Me</Button>
            </StoreFactoryContext.Provider>
        </ErrorBoundary>
    </>
    )
}

export default HomePage;