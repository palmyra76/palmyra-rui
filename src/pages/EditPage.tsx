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
        <div className="palmyra-form-field-container-wrapper">
            <StoreFactoryContext.Provider value={storeFactory}>
                <MuiFieldContainer column={3} title="Name">
                    <MuiTextField attribute="userName"
                        validationRule={"string"}
                        length={{ min: 3, message: "Minimum of 3 letters" }}
                        getFieldManager={getFieldManager}
                    ></MuiTextField>
                </MuiFieldContainer>
                <MuiFieldContainer column={3} title="Gender">
                    <MuiSelect attribute="gender"
                        options={{ M: 'Male', F: 'Female' }}
                        getFieldManager={getFieldManager}
                    ></MuiSelect>
                </MuiFieldContainer>
                <MuiFieldContainer column={3} title="Service">
                    <MuiTextField attribute="service"
                        validationRule={"string"}
                        length={{ min: 3, message: "Minimum of 3 letters" }}
                        getFieldManager={getFieldManager}
                    ></MuiTextField>
                </MuiFieldContainer>
                <MuiFieldContainer column={3} title="Dob">
                    <MuiDatePicker attribute="dob"
                        getFieldManager={getFieldManager}
                    ></MuiDatePicker>
                </MuiFieldContainer>
                <MuiFieldContainer column={3} title="Time">
                    <MuiDateTimePicker attribute="time"
                        getFieldManager={getFieldManager}
                    ></MuiDateTimePicker>
                </MuiFieldContainer>
                <MuiFieldContainer column={3} title="Phone Number">
                    <MuiTextField attribute="phoneNumber"
                        validationRule={"string"}
                        length={{ min: 3, message: "Minimum of 3 letters" }}
                        getFieldManager={getFieldManager}
                    ></MuiTextField>
                </MuiFieldContainer>
                <MuiFieldContainer column={3} title="Email">
                    <MuiTextField attribute="email"
                        length={{ min: 3, message: "Minimum of 3 letters" }}
                        getFieldManager={getFieldManager}
                    ></MuiTextField>
                </MuiFieldContainer>
                <MuiFieldContainer column={3} title="Address">
                    <MuiTextArea attribute="address"
                        length={{ min: 3, message: "Minimum of 3 letters" }}
                        getFieldManager={getFieldManager}
                    ></MuiTextArea>
                </MuiFieldContainer>
                <MuiFieldContainer column={3} title="File">
                    <MuiCheckBox attribute="file"
                        options={{ upload: 'Upload Files', download: 'Download Files' }}
                        getFieldManager={getFieldManager}
                    ></MuiCheckBox>
                </MuiFieldContainer>
                <MuiFieldContainer column={3} title="Status">
                    <MuiSwitch attribute="status"
                        defaultValue={1}
                        options={{ 'Enable': 1, 'Disable': 0 }}
                        getFieldManager={getFieldManager}
                    ></MuiSwitch>
                </MuiFieldContainer>
                <MuiFieldContainer column={3} title="Service">
                    <MuiServerLookup attribute="service" getFieldManager={getFieldManager} required={true}
                        lookupOptions={{ idAttribute: "id", titleAttribute: "userName" }} storeOptions={{ endPoint: "/api/data/fetchMe" }}
                    ></MuiServerLookup>
                </MuiFieldContainer>
            </StoreFactoryContext.Provider >
        </div>
    </>
}

export default EditPage;