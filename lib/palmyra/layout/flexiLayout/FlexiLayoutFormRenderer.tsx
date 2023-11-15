import { forwardRef, useImperativeHandle } from "react";
import { FormMode } from "../../form/Types";

import TabRenderer from "./TabRenderer";
import { FlexiLayoutRendererInput, PageContext } from "./Types";
import { flexiPrimaryType } from ".";
import { createFormData } from "../../form/PalmyraFormManager";
import { FieldManagerContext } from "./FlexiLayoutContext";

const getFormMode = (mode: flexiPrimaryType): FormMode => {
    switch (mode) {
        case 'formEdit':
            return 'edit';
        case 'formNew':
            return 'new';
        case 'formView':
            return 'view'
        default:
            return 'edit';
    }
}

const FlexiLayoutFormRenderer = forwardRef(function FlexiLayoutFormRenderer<T>(props: FlexiLayoutRendererInput<T>, ref) {
    const formData = props.data || {};
    const { layout } = props;
    var { getFieldManager, getFormData, isFormValid } = createFormData(formData, props.callbacks?.onFormValidChange, getFormMode(props.mode));



    useImperativeHandle(ref, () => {
        return {
            getData() {
                return getFormData();
            },
            isValid() {
                return isFormValid();
            }
        };
    }, []);

    const pageContext: PageContext = {  formData: formData };
    const tabs = layout.tabs;

    return (
        <div>
            <FieldManagerContext.Provider value={getFieldManager}>
            {
                tabs.map((tab, index) => (
                    <div key={tab.name + index}>
                        <TabRenderer
                            layout={tab}
                            context={pageContext}
                        ></TabRenderer>
                    </div>
                ))
            }
            </FieldManagerContext.Provider>
        </div>
    );
});

export default FlexiLayoutFormRenderer;
