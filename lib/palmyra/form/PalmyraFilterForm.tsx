import { forwardRef, useImperativeHandle } from "react";
import { IFormCustomizer, IFormHelper, FormMode, NoopFormCustomizer } from "./Types";
import { FieldManagerContext, FormHelperContext, StoreFactoryContext } from "../layout/flexiLayout/FlexiLayoutContext";
import { StoreFactory } from "../../main";
import { createFilterData } from "./PalmyraFilterManager";

interface IPalmyraFilterFormInput {
    children?: any,
    formData: any,
    mode: FormMode,
    storeFactory?: StoreFactory<any>,
    customizer?: IFormCustomizer
}

interface IPalmyraFilterForm {
    getFilterData: () => any
}

const PalmyraFilterForm = forwardRef(function PalmyraFilterForm(props: IPalmyraFilterFormInput, ref) {
    const formCustomizer: IFormCustomizer = props.customizer || NoopFormCustomizer;
    const data = props.formData;
    const mode = props.mode;

    var formHelper: IFormHelper = formCustomizer.getFormHelper();
    const eventListeners = formCustomizer.getEventListeners(formHelper);
    const valueListeners = formCustomizer.getValueListeners(formHelper);

    var { getFieldManager, getFilterData } = createFilterData(data, formHelper,
        { eventListeners, valueListeners });

    useImperativeHandle(ref, (): IPalmyraFilterForm => {
        return {
            getFilterData() {
                return getFilterData();
            }
        };
    }, [data, mode]);

    return (<>
        <StoreFactoryContext.Provider value={props.storeFactory}>
            <FormHelperContext.Provider value={formHelper}>
                <FieldManagerContext.Provider value={getFieldManager}>
                    {props.children}
                </FieldManagerContext.Provider>
            </FormHelperContext.Provider>
        </StoreFactoryContext.Provider>
    </>);

});


export { PalmyraFilterForm }
export type { IPalmyraFilterForm };