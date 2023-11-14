import { useEffect, useState } from "react";
import { MuiDatePicker, MuiDateTimePicker, MuiSelect, MuiServerLookup, MuiTextArea, MuiTextField, createFormData } from "../../lib/main";
import { AppStoreFactory } from "../components/store/AppStoreFactory";
import { StoreFactoryContext } from "../../lib/palmyra/layout/flexiLayout/FlexiLayoutContext";
import MuiFieldContainer from "../../lib/palmyra/mui/layout/MuiFieldContainer";
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
        <StoreFactoryContext.Provider value={storeFactory}>
            <MuiFieldContainer title="Name">
                <MuiTextField attribute="userName"
                    validationRule={"string"}
                    length={{ min: 3, message: "Minimum of 3 letters" }}
                    getFieldManager={getFieldManager}
                ></MuiTextField>
            </MuiFieldContainer>
            <MuiFieldContainer title="Gender">
                <MuiSelect attribute="gender"
                    options={{ M: 'Male', F: 'Female' }}
                    getFieldManager={getFieldManager}
                ></MuiSelect>
            </MuiFieldContainer>
            <MuiFieldContainer title="Service">
                <MuiTextField attribute="service"
                    validationRule={"string"}
                    length={{ min: 3, message: "Minimum of 3 letters" }}
                    getFieldManager={getFieldManager}
                ></MuiTextField>
            </MuiFieldContainer>
            <MuiFieldContainer title="Dob">
                <MuiDatePicker attribute="dob"
                    getFieldManager={getFieldManager}
                ></MuiDatePicker>
            </MuiFieldContainer>
            <MuiFieldContainer title="Time">
                <MuiDateTimePicker attribute="time"
                    getFieldManager={getFieldManager}
                ></MuiDateTimePicker>
            </MuiFieldContainer>
            <MuiFieldContainer title="Phone Number">
                <MuiTextField attribute="phoneNumber"
                    validationRule={"string"}
                    length={{ min: 3, message: "Minimum of 3 letters" }}
                    getFieldManager={getFieldManager}
                ></MuiTextField>
            </MuiFieldContainer>
            <MuiFieldContainer title="Email">
                <MuiTextField attribute="email"
                    length={{ min: 3, message: "Minimum of 3 letters" }}
                    getFieldManager={getFieldManager}
                ></MuiTextField>
            </MuiFieldContainer>
            <MuiFieldContainer title="Address">
                <MuiTextArea attribute="address"
                    length={{ min: 3, message: "Minimum of 3 letters" }}
                    getFieldManager={getFieldManager}
                ></MuiTextArea>
            </MuiFieldContainer>
            <MuiFieldContainer title="File">
                <MuiCheckBox attribute="file"
                    options={{ upload: 'Upload Files', download: 'Download Files' }}
                    getFieldManager={getFieldManager}
                ></MuiCheckBox>
            </MuiFieldContainer>
            <MuiFieldContainer title="Status">
                <MuiSwitch attribute="status"
                    defaultValue={1}
                    options={{ 'Enable': 1, 'Disable': 0 }}
                    getFieldManager={getFieldManager}
                ></MuiSwitch>
            </MuiFieldContainer>
            <MuiServerLookup attribute="service" getFieldManager={getFieldManager} required={true}
                lookupOptions={{ idAttribute: "id", titleAttribute: "userName" }} storeOptions={{ endPoint: "/api/data/fetchMe" }}
            ></MuiServerLookup>
        </StoreFactoryContext.Provider >
    </>
}

export default EditPage;