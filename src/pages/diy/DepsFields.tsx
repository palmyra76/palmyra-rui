import { MutableRefObject, useEffect, useRef, useState } from "react";
import { IFieldEventListener, IFormCustomizer, IFormHelper, IPalmyraForm, ISelectField, IServerLookupField, MuiRadioGroup, MuiSelect, MuiTextField, PalmyraForm, PalmyraStoreFactory, SectionContainer, StoreFactory } from "../../../lib/main";
import { ErrorBoundary } from "../../../lib/palmyra/layout/ErrorBoundary";
import { Button } from "@mui/material";
import { FieldGroupContainer, ServerLookup } from "../../components/form";


const DepsFields = () => {
    const formRef = useRef<IPalmyraForm>(null);
    const [isValid, setValid] = useState(false);
    // const [data] = useState({
    //     manufacturer: [{ id: 3, name: 'HONDA' }]
    // });

    const [data] = useState({
        manufacturer: { id: 3, name: 'HONDA' }
    });

    const model: MutableRefObject<IServerLookupField> = useRef<IServerLookupField>(null);
    const variant: MutableRefObject<IServerLookupField> = useRef<IServerLookupField>(null);

    const onValidityChange = (valid: boolean): void => {
        setValid(valid);
        console.log("validity changed to " + formRef.current.isValid(), formRef.current.getData());
    }

    const submitData = () => {
        console.log(formRef.current.getData() + " sdf");
    }

    // const formHelper: IFormHelper = createFormHelper();

    const ManufacturerChangeListener: IFieldEventListener = {
        onChange: function (key: string, value: any, valid?: boolean): void {
            // model.current.addFilter("manufacturer.id", value);
        }
    }

    const textChangeListener: IFieldEventListener = {
        onChange: function (key: string, value: any, valid?: boolean): void {
            setV(0 == value.length);
        }
    }

    const [v, setV] = useState(true);

    const ModelChangeListener: IFieldEventListener = {
        onChange: function (key: string, value: any, valid?: boolean): void {
            variant.current.addFilter("model.id", value);
        }
    }

    // const customizer: IFormCustomizer = {
    //     getFormHelper: function () {
    //         return formHelper
    //     },
    //     getEventListeners: function () {
    //         return {}
    //     },
    //     getValueListeners: function () {
    //         return {};
    //     }
    // }

    useEffect(() => {

    }, [])

    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' });

    return (<>
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <PalmyraForm storeFactory={storeFactory}
                formData={data} onValidChange={onValidityChange}
                mode="edit" ref={formRef} >
                <SectionContainer title='Welcome'>
                    <FieldGroupContainer columns={2}>
                        {v &&
                        <ServerLookup attribute="year.year" displayAttribute="year.yearNumber"
                            title="Year" required
                            storeOptions={{ endPoint: '/masterdata/vehicleYear' }}
                            lookupOptions={{ idAttribute: "id", titleAttribute: "yearNumber" }} />
                        }
                        <ServerLookup attribute="manufacturer.id"
                            displayAttribute="manufacturer.name"
                            title="Make" multiple={false}
                            eventListener={ManufacturerChangeListener}
                            lookupOptions={{}}
                            storeOptions={{ endPoint: '/masterdata/vehicleManufacturer' }}
                            required={true}
                        />
                        {/* <ServerLookup attribute="model" title="Model"
                            displayAttribute="model" ref={model}
                            lookupOptions={{}} eventListener={ModelChangeListener}
                            storeOptions={{ endPoint: '/masterdata/vehicleModel' }}
                            required={true}
                        />
                        <ServerLookup attribute="specification" title="Specification"
                            displayAttribute="specification"
                            lookupOptions={{}} ref={variant}
                            storeOptions={{ endPoint: '/masterdata/vehicleVariant' }}
                            required={true}
                        /> */}
                        <MuiTextField attribute="sumInsured"
                            title="Sum Insured" eventListener={textChangeListener}
                            validationRule={"string"}
                            required={true}
                        />
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

export default DepsFields;