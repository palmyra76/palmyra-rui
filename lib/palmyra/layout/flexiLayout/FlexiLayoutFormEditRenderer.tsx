import { forwardRef, useImperativeHandle } from "react";
import { FormContext } from "../../form/Types";
import { useFormValidator } from "./FormValidator";
import TabRenderer from "./TabRenderer";
import { FlexiLayoutRendererInput, PageContext } from "./Types";


const FlexiLayoutFormEditRenderer = forwardRef(function FlexiLayoutFormEditRenderer<T>(props: FlexiLayoutRendererInput<T>, ref) {
    const { layout } = props;
    const { data, onDataChange, validationRules, isValid } = useFormValidator(props, "edit");

    useImperativeHandle(ref, () => {
        return {
            getData() {
                return data.current;
            },
            isValid() {
                return isValid;
            }
        };
    }, []);

    var formCtx: FormContext = {
        data: data.current,
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

export default FlexiLayoutFormEditRenderer;
