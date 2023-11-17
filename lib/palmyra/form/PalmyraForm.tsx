import { forwardRef, useImperativeHandle } from "react";
import { FormMode } from "./Types";
import { createFormData } from ".";
import { FieldManagerContext, StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";
import { StoreFactory } from "../../main";

interface IPalmyraFormInput {
    children?: any,
    formData: any,
    onValidChange: Function,
    mode: FormMode,
    storeFactory?: StoreFactory<any>
}

interface IPalmyraForm {
    getData: () => any,
    isValid: () => boolean
}

const PalmyraForm = forwardRef(function PalmyraForm(props: IPalmyraFormInput, ref) {
    const data = props.formData;
    const onValidityChange = props.onValidChange;
    const mode = props.mode;

    var { getFieldManager, getFormData, isFormValid } = createFormData(data, onValidityChange, mode);

    useImperativeHandle(ref, (): IPalmyraForm => {
        return {
            getData() {
                return getFormData();
            },
            isValid() {
                return isFormValid();
            }
        };
    }, [data, onValidityChange, mode]);

    return (<>
        <StoreFactoryContext.Provider value={props.storeFactory}>
            <FieldManagerContext.Provider value={getFieldManager}>
                {props.children}
            </FieldManagerContext.Provider>
        </StoreFactoryContext.Provider>
    </>);

});


export { PalmyraForm }
export type { IPalmyraForm };