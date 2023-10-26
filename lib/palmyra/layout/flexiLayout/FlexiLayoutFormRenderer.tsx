import { forwardRef, useImperativeHandle } from "react";
import { FormContext, FormMode } from "../../form/Types";
import { useFormValidator } from "./FormValidator";
import TabRenderer from "./TabRenderer";
import { FlexiLayoutRendererInput, PageContext } from "./Types";
import { flexiPrimaryType } from ".";

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
    
    const { layout } = props;        
    const { formData, onDataChange, validationRules, isValid } = useFormValidator(props, getFormMode(props.mode));

    useImperativeHandle(ref, () => {
        return {
            getData() {
                return formData;
            },
            isValid() {
                return isValid;
            }
        };
    }, []);

    var formCtx: FormContext = {
        data: formData,
        onDataChange: onDataChange,
        rules: validationRules
    }


    const pageContext: PageContext = { formContext: formCtx };
    const tabs = layout.tabs;

    return (
        <div>
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
        </div>
    );
});

export default FlexiLayoutFormRenderer;
