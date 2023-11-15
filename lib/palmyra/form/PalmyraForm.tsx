import { forwardRef, useImperativeHandle } from "react";
import { FormMode } from "./Types";
import { createFormData } from ".";
import { FieldManagerContext } from "../layout/flexiLayout/FlexiLayoutContext";

interface IPalmyraFormInput {
    children?: any,
    formData: any,
    onValidChange: Function,
    mode: FormMode
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
        <FieldManagerContext.Provider value={getFieldManager}>
            {props.children}
        </FieldManagerContext.Provider>
    </>);

});


export { PalmyraForm }
export type { IPalmyraForm };