import { Button } from "@mui/material";
import MuiTextField from "../../lib/palmyra/mui/form/MuiTextField";
import { useEffect, useRef, useState } from "react";
import MuiTextArea from "../../lib/palmyra/mui/form/MuiTextArea";
import MuiSelect from "../../lib/palmyra/mui/form/MuiSelect";
import MuiRadioGroup from "../../lib/palmyra/mui/form/MuiRadioGroup";
import MuiDatePicker from "../../lib/palmyra/mui/form/MuiDatePicker";
import { MuiDateTimePicker, MuiServerLookup, StoreFactory } from "../../lib/main";
import { AppStoreFactory } from "../components/store/AppStoreFactory";
import { ErrorBoundary } from "../../lib/palmyra/layout/ErrorBoundary";
import MuiCheckBox from "../../lib/palmyra/mui/form/MuiCheckBox";
import MuiSwitch from "../../lib/palmyra/mui/form/MuiSwitch";
import SectionContainer from "../../lib/palmyra/layout/container/SectionContainer";
import { IPalmyraForm, PalmyraForm } from "../../lib/palmyra/form/PalmyraForm";
import FormFieldContainer from "../../lib/palmyra/layout/container/FieldGroupContainer";


const HomePage = () => {
    const formRef = useRef<IPalmyraForm>(null);
    const [isValid, setValid] = useState(false);
    const [data, setData] = useState({});

    const onValidityChange = (valid: boolean): void => {
        // if (valid != undefined)
        //     setValid(valid);

        setValid(valid);
        console.log("validity changed to " + formRef.current.isValid());
        console.log(formRef.current.getData());
    }

    const submitData = () => {
        console.log(formRef.current.getData());
        console.log(formRef.current.isValid());
    }

    useEffect(() => {
        setTimeout(() => {
            setData({
                serverHost: 'google.com', port: '2022', dob: '2023-10-19', gender: 'M', file: 'upload',
                genders: 'F',
                userName: 'titan',
                service: 1, switch: 0,
                time: '2023-10-19 09:21:21'
            });
        }, 2000);
    }, [])

    const storeFactory: StoreFactory<any> = new AppStoreFactory();

    console.log(data);


    return (<>

        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <PalmyraForm storeFactory={storeFactory}
                formData={data} onValidChange={onValidityChange}
                mode="edit" ref={formRef} >
                <SectionContainer title='Welcome'>
                    <FormFieldContainer>
                        <MuiTextField attribute="serverHost"
                            title="Server Host"
                            placeHolder="welcome"
                            length={{ min: 3, message: "Minimum of 3 letters" }} />
                        <MuiSelect attribute="gender" title="Gender"
                            options={{ M: 'Male', F: 'Female' }} />
                        <MuiRadioGroup attribute="genders" title="Gender"
                            options={{ M: 'Male', F: 'Female' }} />
                    </FormFieldContainer>
                </SectionContainer>

                <SectionContainer title='Hello World' >
                    <FormFieldContainer columns={2}>
                        <MuiDatePicker attribute="dob"
                            title="Date of Birth"
                            readonly={true} />
                        <MuiDateTimePicker attribute="time"
                            title="Time"
                            readonly={true} />
                        <MuiTextArea attribute="address" title="Address"
                            length={{ min: 3, message: "Minimum of 3 letters" }}
                            required={true}
                            readonly={true} />
                        <MuiServerLookup attribute="service" required={true} title="Service"                            
                            lookupOptions={{ idAttribute: "id", titleAttribute: "userName" }}
                            storeOptions={{ endPoint: "/api/data/fetchMe" }} />
                        <MuiCheckBox attribute="file" title="File"
                            readonly={true}
                            options={{ upload: 'Upload Files', download: 'Download Files' }}
                            required={true} />
                    </FormFieldContainer>
                </SectionContainer>

                <MuiSwitch attribute="switch"
                    readonly={true}
                    defaultValue={1}
                    options={{ 'Enable': 1, 'Disable': 0 }}

                ></MuiSwitch>
                <br />
                <Button disabled={!isValid} onClick={() => { submitData() }}>Test Me</Button>

                <Button onClick={() => { onValidityChange(false) }}>Toggle Me</Button>
            </PalmyraForm>

        </ErrorBoundary>

    </>
    )
}

export default HomePage;