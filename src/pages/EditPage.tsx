import { useEffect, useState } from "react";
import { FieldGroupContainer, MuiDatePicker, MuiDateTimePicker, MuiSelect, MuiServerLookup, MuiTextArea, MuiTextField, createFormData } from "../../lib/main";
import { AppStoreFactory } from "../components/store/AppStoreFactory";
import { StoreFactoryContext } from "../../lib/palmyra/layout/flexiLayout/FlexiLayoutContext";
import MuiCheckBox from "../../lib/palmyra/mui/form/MuiCheckBox";
import MuiSwitch from "../../lib/palmyra/mui/form/MuiSwitch";


const EditPage = () => {

    const [_isValid, setValid] = useState(false);
    const [data, setData] = useState({});

    const onValidityChange = (valid: boolean): void => {
        setValid(valid);

        console.log("validity changed to " + isFormValid());
        console.log(getFormData());
    }

    useEffect(() => {
        setTimeout(() => {
            setData({
                "userName": "Rolex",
                "gender": "M",
                "file": "upload,download",
                "dob": "2001-01-21",
                "time": "2001-10-01 12:20:55",
                "phoneNumber": "9876543210",
                "service": "rolex@gmail.com",
                "email": "rolex@gmail.com",
                "address": "27/4, East Street, Tenkasi",
                "status": 1
            });
        }, 2000);
    }, [])

    const storeFactory = new AppStoreFactory();

    var { getFieldManager, getFormData, isFormValid } = createFormData(data, onValidityChange, 'edit');

    return <>
        <div>Simple Edit Form</div>
        <div className="palmyra-form-field-container-wrapper">
            <StoreFactoryContext.Provider value={storeFactory}>
                <FieldGroupContainer columns={3}>
                    <MuiTextField attribute="userName" title="Name"
                        validationRule={"string"}
                        length={{ min: 3, message: "Minimum of 3 letters" }}                        
                    ></MuiTextField>
                
                    <MuiSelect attribute="gender" title="Gender"
                        options={{ M: 'Male', F: 'Female' }}                        
                    ></MuiSelect>
                    <MuiTextField attribute="service" title="Service"
                        validationRule={"string"}
                        length={{ min: 3, message: "Minimum of 3 letters" }}                        
                    ></MuiTextField>                
                    <MuiDatePicker attribute="dob" title="Dob"                        
                    ></MuiDatePicker>
                    <MuiDateTimePicker attribute="time" title="Time"                        
                    ></MuiDateTimePicker>
                    <MuiTextField attribute="phoneNumber" title="Phone Number"
                        validationRule={"string"}
                        length={{ min: 3, message: "Minimum of 3 letters" }}                        
                    ></MuiTextField>
                    <MuiTextField attribute="email" title="Email"
                        length={{ min: 3, message: "Minimum of 3 letters" }}                        
                    ></MuiTextField>
                    <MuiTextArea attribute="address" title="Address"
                        length={{ min: 3, message: "Minimum of 3 letters" }}                        
                    ></MuiTextArea>
                    <MuiCheckBox attribute="file" title="File"
                        options={{ upload: 'Upload Files', download: 'Download Files' }}                        
                    ></MuiCheckBox>
                    <MuiSwitch attribute="status" title="Status"
                        defaultValue={1}
                        options={{ 'Enable': 1, 'Disable': 0 }}
                    ></MuiSwitch>
                    <MuiServerLookup attribute="service" required={true} title="Service"
                        lookupOptions={{ idAttribute: "id", titleAttribute: "userName" }} storeOptions={{ endPoint: "/api/data/fetchMe" }}
                    ></MuiServerLookup>
                </FieldGroupContainer>
            </StoreFactoryContext.Provider >
        </div>
    </>
}

export default EditPage;