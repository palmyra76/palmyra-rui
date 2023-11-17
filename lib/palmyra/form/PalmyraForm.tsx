import { forwardRef, useImperativeHandle } from "react";
import { IFormCustomizer, IFormHelper, FormMode, NoopFormCustomizer } from "./Types";
import { createFormData } from ".";
import { FieldManagerContext, StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";
import { StoreFactory } from "../../main";

interface IPalmyraFormInput {
    children?: any,
    formData: any,
    onValidChange: Function,
    mode: FormMode,
    storeFactory?: StoreFactory<any>,
    customizer?: IFormCustomizer
}

interface IPalmyraForm {
    getData: () => any,
    isValid: () => boolean
}

const PalmyraForm = forwardRef(function PalmyraForm(props: IPalmyraFormInput, ref) {
    const formCustomizer: IFormCustomizer = props.customizer || NoopFormCustomizer;
    const data = props.formData;
    const onValidityChange = props.onValidChange;
    const mode = props.mode;

    var formHelper: IFormHelper = formCustomizer.getFormHelper();
    const changeListeners = formCustomizer.getOnChangeListeners(formHelper);
    const valueListeners = formCustomizer.getValueListeners(formHelper);

    var { getFieldManager, getFormData, isFormValid } = createFormData(data, onValidityChange, mode, formHelper, {changeListeners, valueListeners});

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