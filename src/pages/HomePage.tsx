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
import MuiCheckBox from "../../lib/palmyra/mui/form/MuiCheckBox";
import MuiSwitch from "../../lib/palmyra/mui/form/MuiSwitch";
import MuiFieldContainer from "../../lib/palmyra/mui/layout/MuiFieldContainer";
import SectionContainer from "../../lib/palmyra/layout/container/SectionContainer";


const HomePage = () => {

    const [isValid, setValid] = useState(false);
    const [data, setData] = useState({});

    const onValidityChange = (valid: boolean): void => {
        // if (valid != undefined)
        //     setValid(valid);

        setValid(valid);

        console.log("validity changed to " + isFormValid());
        console.log(getFormData());
    }

    useEffect(() => {
        setTimeout(() => {
            setData({ serverHost: 'google.com', port: '2022', dob: '2023-10-19', gender: 'M', file: 'upload', service: 1, switch: 1});
        }, 2000);
    }, [])

    const storeFactory = new AppStoreFactory();

    console.log(data);
    var { getFieldManager, getFormData, isFormValid } = createFormData(data, onValidityChange, 'edit');

    return (<>
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <StoreFactoryContext.Provider value={storeFactory}>
                <SectionContainer type="form" title='Welcome'>
                    <MuiTextField attribute="serverHost"
                        placeHolder="welcome"

                        length={{ min: 3, message: "Minimum of 3 letters" }}
                        getFieldManager={getFieldManager}
                    ></MuiTextField>
                    <MuiFieldContainer title="Gender">
                        <MuiSelect attribute="gender"
                            options={{ M: 'Male', F: 'Female' }}
                            getFieldManager={getFieldManager}
                        ></MuiSelect>
                    </MuiFieldContainer>
                    <MuiRadioGroup attribute="gender"
                        options={{ M: 'Male', F: 'Female' }}
                        getFieldManager={getFieldManager}
                    ></MuiRadioGroup>
                </SectionContainer>

                <SectionContainer type="form" title='Hello World'>
                    <MuiDatePicker attribute="dob"
                        getFieldManager={getFieldManager}
                    ></MuiDatePicker>

                    <MuiTextArea attribute="port"
                        length={{ min: 3, message: "Minimum of 3 letters" }}
                        required={true}
                        getFieldManager={getFieldManager}
                    ></MuiTextArea>

                    <MuiServerLookup attribute="service" getFieldManager={getFieldManager} required={true}
                        lookupOptions={{ idAttribute: "id", displayAttribute: "userName" }} storeOptions={{ endPoint: "/api/data/fetchMe" }}
                    ></MuiServerLookup>

                    <MuiCheckBox attribute="file"
                        options={{ upload: 'Upload Files', download: 'Download Files' }}
                        required={true}
                        getFieldManager={getFieldManager}
                    ></MuiCheckBox>
                </SectionContainer>

                <MuiSwitch attribute="switch"
                    required={true} defaultValue={1}
                    options={{ 'Enable': 1, 'Disable': 0 }}
                    getFieldManager={getFieldManager}
                ></MuiSwitch>

                <Button disabled={!isValid} onClick={() => { console.log("submitting data", getFormData()) }}>Test Me</Button>

                <Button onClick={() => { onValidityChange(false) }}>Toggle Me</Button>
            </StoreFactoryContext.Provider>
        </ErrorBoundary>
    </>
    )
}

export default HomePage;