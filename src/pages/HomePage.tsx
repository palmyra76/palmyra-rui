import { Button } from "@mui/material";
import MuiTextField from "../../lib/palmyra/mui/form/MuiTextField";
import { useEffect, useRef, useState } from "react";
import MuiTextArea from "../../lib/palmyra/mui/form/MuiTextArea";
import MuiSelect from "../../lib/palmyra/mui/form/MuiSelect";
import MuiRadioGroup from "../../lib/palmyra/mui/form/MuiRadioGroup";
import MuiDatePicker from "../../lib/palmyra/mui/form/MuiDatePicker";
import { MuiDateTimePicker, MuiServerLookup } from "../../lib/main";
import {  StoreFactoryContext } from "../../lib/palmyra/layout/flexiLayout/FlexiLayoutContext";
import { AppStoreFactory } from "../components/store/AppStoreFactory";
import { ErrorBoundary } from "../../lib/palmyra/layout/ErrorBoundary";
import MuiCheckBox from "../../lib/palmyra/mui/form/MuiCheckBox";
import MuiSwitch from "../../lib/palmyra/mui/form/MuiSwitch";
import MuiFieldContainer from "../../lib/palmyra/mui/layout/MuiFieldContainer";
import SectionContainer from "../../lib/palmyra/layout/container/SectionContainer";
import { IPalmyraForm, PalmyraForm } from "../../lib/palmyra/form/PalmyraForm";


const HomePage = () => {
    const formRef = useRef<IPalmyraForm>(null);
    const [isValid, setValid] = useState(false);
    const [data, setData] = useState({});

    const onValidityChange = (valid: boolean): void => {
        // if (valid != undefined)
        //     setValid(valid);

        setValid(valid);
        ;
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

    const storeFactory = new AppStoreFactory();

    console.log(data);
    

    return (<>
        <div className="palmyra-form-field-container-wrapper">
            <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
                <StoreFactoryContext.Provider value={storeFactory}>
                    <PalmyraForm
                        formData={data} onValidChange={onValidityChange}
                        mode="edit" ref={formRef} >
                        <SectionContainer type="form" title='Welcome'>
                            <MuiTextField attribute="serverHost"
                                placeHolder="welcome"
                                readonly={true}
                                length={{ min: 3, message: "Minimum of 3 letters" }}

                            ></MuiTextField>
                            <MuiFieldContainer title="Gender">
                                <MuiSelect attribute="gender"
                                    readonly={true}
                                    options={{ M: 'Male', F: 'Female' }}

                                ></MuiSelect>
                            </MuiFieldContainer>
                            <MuiFieldContainer title="Gender">
                                <MuiRadioGroup attribute="genders"
                                    readonly={true}
                                    options={{ M: 'Male', F: 'Female' }}

                                ></MuiRadioGroup>
                            </MuiFieldContainer>
                        </SectionContainer>

                        <SectionContainer type="form" title='Hello World'>
                            <MuiDatePicker attribute="dob"
                                readonly={true}

                            ></MuiDatePicker>

                            <MuiDateTimePicker attribute="time"
                                readonly={true}

                            ></MuiDateTimePicker>

                            <MuiTextArea attribute="port"
                                length={{ min: 3, message: "Minimum of 3 letters" }}
                                required={true}
                                readonly={true}

                            ></MuiTextArea>

                            <MuiServerLookup attribute="service" required={true}
                                readonly={true}
                                lookupOptions={{ idAttribute: "id", titleAttribute: "userName" }} storeOptions={{ endPoint: "/api/data/fetchMe" }}
                            ></MuiServerLookup>

                            <MuiCheckBox attribute="file"
                                readonly={true}
                                options={{ upload: 'Upload Files', download: 'Download Files' }}
                                required={true}

                            ></MuiCheckBox>
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
                </StoreFactoryContext.Provider>

            </ErrorBoundary>
        </div >
    </>
    )
}

export default HomePage;