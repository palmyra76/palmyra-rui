import { Button, IconButton } from "@mui/material";
import MuiTextField from "../../lib/palmyra/mui/form/MuiTextField";
import { useEffect, useRef, useState } from "react";
import MuiTextArea from "../../lib/palmyra/mui/form/MuiTextArea";
import MuiSelect from "../../lib/palmyra/mui/form/MuiSelect";
import MuiRadioGroup from "../../lib/palmyra/mui/form/MuiRadioGroup";
import MuiDatePicker from "../../lib/palmyra/mui/form/MuiDatePicker";
import { IFieldEventListener, IFormCustomizer, IFormHelper, IRadioGroupField, MuiCheckBoxGroup, MuiDateTimePicker, MuiServerLookup, MuiSlider, StoreFactory } from "../../lib/main";
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
import MuiDateRangePicker from "../../lib/palmyra/mui/form/MuiDateRangePicker";
import MuiNumberField from "../../lib/palmyra/mui/form/MuiNumberField";
import MuiIntegerField from "../../lib/palmyra/mui/form/MuiIntegerField";
import MuiIOSSwitch from "../../lib/palmyra/mui/form/MuiIOSSwitch";
import SimpleChart from "../components/chart/SimpleChart";
import { GoHeart, GoHeartFill } from "react-icons/go";
import MuiRating from "../../lib/palmyra/mui/form/MuiRating";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextView from '../../lib/palmyra/mui/textView/TextView';
import LookupView from "../../lib/palmyra/mui/textView/LookupView";
import OptionsView from "../../lib/palmyra/mui/textView/OptionsView";
import DateView from "../../lib/palmyra/mui/textView/DateView";

const HomePage = () => {
    const formRef = useRef<IPalmyraForm>(null);
    const [isValid, setValid] = useState(false);
    const [data, setData] = useState({});
    const sd = useRef(null);
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
        },
        onBlur(key, value, valid) {
            console.log(value, valid);
            sd.current.setValue('', true);
        }
    }

    const customizer: IFormCustomizer = {
        getFormHelper: function () {
            return formHelper
        },
        getEventListeners: function () {
            return {
                'gender': genderEventListener
            }
        },
        getValueListeners: function () {
            return {};
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setData({
                serverHost: 'google.com', port: '2022', dob: '04-09-2023', gender: 'M', file: 'upload',
                genders: 'F',
                password: 'secret',
                userName: 'titan',
                service: { id: 1, serviceName: 'Rolex' },
                switch: 0,
                time: '2023-10-19T09:21:21',
                dobs: '2023-10-19...2023-10-29',
                asd: '2'
            });
        }, 2000);
    }, [])
    const b = [
        <>
            <div>
                dd
            </div>
            <div>
                ss
            </div>
            <div>
                ss
            </div>
        </>
    ]
    // const customButton = [
    //     <IconButton
    //         onClick={(e) => {
    //             e.stopPropagation(); 
    //         }}
    //         size="small"
    //     >
    //         pp
    //     </IconButton>
    // ];
    const storeFactory: StoreFactory<any> = new AppStoreFactory();
    const date = new Date();
    return (<>

        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <PalmyraForm storeFactory={storeFactory} customizer={customizer}
                formData={data} onValidChange={onValidityChange}
                mode="new" ref={formRef} >
                {/* <SectionContainer title='Welcome' customButton={b} hideTitle>
                    <FormFieldContainer>
                        <MuiTextField attribute="serverHost"
                            title="Server Host"
                            required={true} ref={sd}
                            placeHolder="welcome"
                            length={{ min: 3, message: "Minimum of 3 letters" }} />
                        <MuiRadioGroup attribute="gender" label="Gender"
                            options={{ M: 'Male', F: 'Female' }} required />
                        <MuiTextField attribute="genders" label="gender" />
                        {/* <MuiRadioGroup attribute="genders" title="Gender"
                            options={{ M: 'Male', F: 'Female' }} /> 
                    </FormFieldContainer>
                </SectionContainer> */}

                <SectionContainer title='Hello World' >
                    <FormFieldContainer columns={4}>
                        {/* <MuiPassword
                            errorMessage={{
                                'oneLowerCase': 'Invalid lower case',
                                'oneUpperCase': 'Invalid upper',
                                'oneSpecialChar': 'One Special Char'
                            }}
                            length={{ min: 8, message: 'Atleast min 8 chars' }}
                            attribute="password"
                            validationRule={["oneUpperCase", 'oneLowerCase', 'oneSpecialChar']}
                        /> */}

                        {/* <MuiDatePicker attribute="" disableFuture
                            title="Date of Birth" defaultValue={date}
                        /> */}
                        {/* <MuiDateTimePicker attribute="time"
                            title="Time"
                            serverPattern="YYYY-MM-DDTHH:MM:SS"
                            displayPattern="DD-MM-YYYY HH"
                            readonly={true} /> */}
                        <MuiRadioGroup attribute="gender" label="Gender"
                            options={{ M: 'Male', F: 'Female' }} required />
                        <OptionsView attribute="gender" label="Gender"
                            options={{ M: 'Male', F: 'Female' }}  variant="outlined"/>
                        <DateView attribute="time" label="Time" displayPattern="dd-MM-yyyy h:mm a"
                        textAlign="center" variant="outlined"/>
                        <DateView attribute="dob" label="Date of birth" displayPattern="dd-MM-yyyy"
                         variant="outlined"/>
                        {/* <TextView attribute="file" label="FileTwo" type='string'/>
                        <TextView attribute="file" label="File" type='string'/>
                        <TextView attribute="file" label="FileTwo" type='string'/> */}
                        {/* <TextView attribute="service" label="Service View"
                        /> */}
                        {/* <MuiTextArea attribute="address" title="Address"
                            length={{ min: 3, message: "Minimum of 3 letters" }}
                            required={true} /> */}
                        {/* <MuiTextField attribute="serverHost"
                            title="Server Host"
                            placeHolder="welcome"
                            length={{ min: 3, message: "Minimum of 3 letters" }} /> */}
                        <TextView attribute="serverHost" label="Server Host" 
                         variant="outlined"/>
                        <MuiServerLookup attribute="service.id"
                            displayAttribute="service.serviceName"
                            required={true} label="Service"
                            lookupOptions={{ idAttribute: "id", displayAttribute: "serviceName" }}
                            storeOptions={{ endPoint: "/api/data/fetchMe" }} />
                        <LookupView attribute="service.id" label="Lookup Service"
                            displayAttribute="service.serviceName"  variant="outlined"/>
                        {/* <MuiServerLookup attribute="service" displayAttribute="serviceName"
                            required={true} label="Service"
                            lookupOptions={{ idAttribute: "id", displayAttribute: "userName" }}
                            storeOptions={{ endPoint: "/api/data/fetchMe" }} />
                        <MuiCheckBoxGroup attribute="file" title="File"
                            options={{ upload: 'Upload Files', download: 'Download Files' }}
                            required={true} /> */}
                        {/* <MuiCheckBox attribute="checkBox" title="Single CheckBox"
                            icon={GoHeart} checkedIcon={GoHeartFill} /> */}
                        {/* <MuiRating attribute="checkBox" title="Rating"
                            defaultValue={4.6} precision={0.5} />
                        <MuiSelect attribute="hvhg" label="select" variant="outlined"
                            options={{ 'a': 'a', 'b': 'b' }} /> */}
                    </FormFieldContainer>
                </SectionContainer>
                {/* <MuiSwitch attribute="switch"
                    defaultValue={1}
                    options={{ 'Enable': 1, 'Disable': 0 }}

                ></MuiSwitch>

                <MuiIOSSwitch attribute="switch"
                    defaultValue={1}
                    options={{ 'Enable': 1, 'Disable': 0 }}

                ></MuiIOSSwitch>

                <MuiServerCheckBox attribute="asd" displayAttribute="serviceName" flexDirection="column"
                    required={true} label="Server Checkbox" className="branchBox"
                    lookupOptions={{ idAttribute: "id", titleAttribute: "userName" }}
                    storeOptions={{ endPoint: "/api/palmyra/masterdata/" }} />

                <MuiServerCheckBox attribute="asd" displayAttribute="serviceName" flexDirection="column"
                    readonly={true} label="Server Checkbox" className="branchBox" hideSelectAll
                    lookupOptions={{ idAttribute: "id", titleAttribute: "userName" }} showSelectedOnly={true}
                    storeOptions={{ endPoint: "/api/palmyra/masterdata/" }} />

                <MuiDatePicker attribute="dob"
                    title="Date of Birth" displayPattern="MM-YYYY-DD" serverPattern="YYYY-MM-DD" />
                <MuiDateRangePicker attribute="dobs"
                    title="Date Range" displayPattern="MM-DD-YYYY" serverPattern="YYYY-MM-DD" />

                <MuiNumberField attribute="serv"
                    title="Number"
                    placeHolder="numbersOnly"
                    validationRule={'number'} />
                <MuiSlider attribute="jhu" autoFocus label="buhbu" />
                <MuiIntegerField attribute="integer"
                    title="Integer"
                    placeHolder="integer" />
                <br />
                <Button disabled={!isValid} onClick={() => { submitData() }}>Test Me</Button>

                <Button onClick={() => { onValidityChange(false) }}>Toggle Me</Button> */}
            </PalmyraForm>

        </ErrorBoundary>



        <SimpleChart type="Line"
            chartOptions={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        offset: -4
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                }
            }}
            // plugins={[ChartDataLabels]}
            storeOptions={{ endPoint: '/booth/chart/byCriticality' }}
            styleOptions={{

                'CRITICAL': {
                    backgroundColor: 'rgba(220,53,69,0.7)',
                    borderColor: 'rgba(220,53,69,1)',
                }, 'NORMAL': {
                    backgroundColor: 'rgba(40,167,69,0.7)',
                    borderColor: 'rgba(40,167,69,1)'
                }, 'VULNERABLE': {
                    backgroundColor: 'rgba(0,123,255,0.7)',
                    borderColor: 'rgba(0,123,255,0.7)'
                }, 'CRITICAL/VULNERABLE': {
                    backgroundColor: 'rgba(255,193,7,0.7)',
                    borderColor: 'rgba(255,193,7,0.7)'
                },

            }}
            transformOptions={{
                yKey: 'count',
                yLabel: 'Criticality'
            }}
            hideTitle={true}
        />
    </>
    )
}

export default HomePage;