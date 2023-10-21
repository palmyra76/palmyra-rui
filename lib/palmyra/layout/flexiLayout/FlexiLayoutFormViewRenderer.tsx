import { forwardRef, useImperativeHandle } from "react";
import { FormContext } from "../../form/Types";
import TabRenderer from "./TabRenderer";
import { FlexiLayoutRendererInput, PageContext } from "./Types";


const FlexiLayoutFormViewRenderer = forwardRef(
    function FlexiLayoutFormViewRenderer<T>(props: FlexiLayoutRendererInput<T>, ref) {
    const { layout } = props;
    const { data } = props;

    useImperativeHandle(ref, () => {
        return {
            getData() {
                return data.current;
            }
        };
    }, []);

    var formCtx: FormContext = {
        data,
        rules: {}, 
        onDataChange: () => { }
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

export default FlexiLayoutFormViewRenderer;
