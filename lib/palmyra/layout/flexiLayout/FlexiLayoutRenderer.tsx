import { FormContext } from "../../form/Types";
import { useFormValidator } from "./FormValidator";
import TabRenderer from "./TabRenderer";
import { FlexiLayoutRendererInput, PageContext } from "./Types";


const FlexiLayoutRenderer = (props: FlexiLayoutRendererInput) => {
    const { layout, formContext } = props;
    const { data, onDataChange, validationRules } = useFormValidator(layout, 'new', {})

    var formCtx: FormContext = {
        data: data.current,
        onDataChange: onDataChange,
        rules: validationRules,
        eventHandlers: formContext.eventHandlers
    }


    const pageContext: PageContext = { formContext:formCtx };
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
};

export default FlexiLayoutRenderer;
