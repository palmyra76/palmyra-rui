import { Button } from "@mui/material";
import MuiTextField from "../../lib/palmyra/mui/form/MuiTextField";
import { useEffect, useRef, useState } from "react";
import MuiTextArea from "../../lib/palmyra/mui/form/MuiTextArea";
import MuiSelect from "../../lib/palmyra/mui/form/MuiSelect";
import MuiRadioGroup from "../../lib/palmyra/mui/form/MuiRadioGroup";
import MuiDatePicker from "../../lib/palmyra/mui/form/MuiDatePicker";
import { IFieldEventListener, IFormCustomizer, IFormHelper, IRadioGroupField, MuiDateTimePicker, MuiServerLookup, StoreFactory } from "../../lib/main";
import { AppStoreFactory } from "../components/store/AppStoreFactory";
import { ErrorBoundary } from "../../lib/palmyra/layout/ErrorBoundary";
import MuiCheckBox from "../../lib/palmyra/mui/form/MuiCheckBox";
import MuiSwitch from "../../lib/palmyra/mui/form/MuiSwitch";
import SectionContainer from "../../lib/palmyra/layout/container/SectionContainer";
import { IPalmyraForm, PalmyraForm } from "../../lib/palmyra/form/PalmyraForm";
import FormFieldContainer from "../../lib/palmyra/layout/container/FieldGroupContainer";
import MuiPassword from "../../lib/palmyra/mui/form/MuiPassword";
import { createFormHelper } from "../../lib/palmyra/form/PalmyraFormManager";
import MuiServerCheckBox from "../../lib/palmyra/mui/form/MuiServerCheckBox";


const HomePage = () => {
    const formRef = useRef<IPalmyraForm>(null);
    const [isValid, setValid] = useState(false);
    const [data, setData] = useState({});

    const onValidityChange = (valid: boolean): void => {
        setValid(valid);
        console.log("validity changed to " + formRef.current.isValid(), formRef.current.getData());
    }

    const submitData = () => {
        console.log(formRef.current.getData());
    }

    const formHelper: IFormHelper = createFormHelper();

    const genderEventListener: IFieldEventListener = {
        onChange: function (key: string, value: any, valid?: boolean): void {
            const gendersField: IRadioGroupField = formHelper.getFieldRef<IRadioGroupField>('gender');
            gendersField.setValue(value);
        }
    }

    const customizer: IFormCustomizer = {
        getFormHelper: function () {
            return formHelper
        },
        getOnChangeListeners: function () {
            return {
                'genders': genderEventListener
            }
        },
        getValueListeners: function () {
            return {};
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setData({
                serverHost: 'google.com', port: '2022', dob: '2023-10-19', gender: 'M', file: 'upload',
                genders: 'F',
                password: 'secret',
                userName: 'titan',
                service: 1, serviceName: 'Rolex',
                switch: 0,
                time: '2023-10-19 09:21:21'
            });
        }, 2000);
    }, [])

    const storeFactory: StoreFactory<any> = new AppStoreFactory();

    return (<>

        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <PalmyraForm storeFactory={storeFactory} customizer={customizer}
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
                        <MuiPassword
                            errorMessage={{
                                'oneLowerCase': 'Invalid lower case',
                                'oneUpperCase': 'Invalid upper',
                                'oneSpecialChar': 'One Special Char'
                            }}
                            length={{ min: 8, message: 'Atleast min 8 chars' }}
                            attribute="password"
                            validationRule={["oneUpperCase", 'oneLowerCase', 'oneSpecialChar']}
                        />

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
                        <MuiServerLookup attribute="service" displayAttribute="serviceName"
                            required={true} label="Service"
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

                <MuiServerCheckBox attribute="asd" displayAttribute="serviceName" flexDirection="column"
                    required={true} label="Server Checkbox" className="branchBox"
                    lookupOptions={{ idAttribute: "id", titleAttribute: "userName" }}
                    storeOptions={{ endPoint: "/api/palmyra/masterdata/" }} />
                <br />
                <Button disabled={!isValid} onClick={() => { submitData() }}>Test Me</Button>

                <Button onClick={() => { onValidityChange(false) }}>Toggle Me</Button>
            </PalmyraForm>

        </ErrorBoundary>

    </>
    )
}

export default HomePage;