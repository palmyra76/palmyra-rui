import { useRef, useState } from "react";
import {
    IFieldEventListener, IFormCustomizer, IFormHelper, IPalmyraForm, ISelectField, MuiRadioGroup, MuiSelect,
    MuiTextField, PalmyraForm, PalmyraStoreFactory, SectionContainer, StoreFactory, createFormHelper
} from "../../../lib/main";
import { ErrorBoundary } from "../../../lib/palmyra/layout/ErrorBoundary";
import { Button } from "@mui/material";
import { FieldGroupContainer } from "../../components/form";


const DynamicFields = () => {
    const formRef = useRef<IPalmyraForm>(null);
    const [isValid, setValid] = useState(false);
    const [data, _setData] = useState({});

    const onValidityChange = (valid: boolean): void => {
        setValid(valid);
        console.log("validity changed to " + formRef.current.isValid(), formRef.current.getData());
    }

    const submitData = () => {
        console.log(formRef.current.getData());
    }

    const formHelper: IFormHelper = createFormHelper();

    const ncbEventListener: IFieldEventListener = {
        onChange: function (key: string, value: any, valid?: boolean): void {
            console.log(value);
            const ncbOptions: ISelectField = formHelper.getFieldRef<ISelectField>('ncbOptions');
            if (ncbOptions) {
                console.log(ncbOptions);
                ncbOptions.setVisible(value == "true");
            }
        }
    }

    const customizer: IFormCustomizer = {
        getFormHelper: function () {
            return formHelper
        },
        getEventListeners: function () {
            return {
                'ncb': ncbEventListener
            }
        },
        getValueListeners: function () {
            return {};
        }
    }
    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api' });

    return (<>
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <PalmyraForm storeFactory={storeFactory} customizer={customizer}
                formData={data} onValidChange={onValidityChange}
                mode="edit" ref={formRef} >
                <SectionContainer title='Welcome'>
                    <FieldGroupContainer columns={2}>
                        <MuiTextField attribute="serverHost"
                            title="Server Host"
                            placeHolder="welcome"
                            length={{ min: 3, message: "Minimum of 3 letters" }} />
                        <MuiSelect attribute="gender" title="Gender"
                            options={{ M: 'Male', F: 'Female' }} />
                        <MuiRadioGroup attribute="ncb" title="No Claim Bonus"
                            required={true}
                            options={{ true: 'Yes', false: 'No' }} />


                        <MuiTextField attribute="sfs" title="Server " placeHolder="welcome"
                            length={{ min: 3, message: "Minimum of 3 letters" }} />
                    </FieldGroupContainer>
                </SectionContainer>
                <br />
                <Button disabled={!isValid} onClick={() => { submitData() }}>Test Me</Button>

                <Button onClick={() => { onValidityChange(false) }}>Toggle Me</Button>
            </PalmyraForm>

        </ErrorBoundary>

    </>
    )
}

export default DynamicFields;