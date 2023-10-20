import { forwardRef, useImperativeHandle } from "react";

import TabRenderer from "./TabRenderer";
import { FlexiLayoutRendererInput, PageContext } from "./Types";


const FlexiLayoutGridRenderer = forwardRef(function FlexiLayoutGridRenderer<T>(props: FlexiLayoutRendererInput<T>, ref) {
    const { layout } = props;

    useImperativeHandle(ref, () => {
        return {
            resetFilter() {

            }
        };
    }, []);

    const pageContext: PageContext = {};
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

export default FlexiLayoutGridRenderer;
