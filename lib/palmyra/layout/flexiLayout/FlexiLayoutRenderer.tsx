import TabRenderer from "./TabRenderer";
import { FlexiLayoutRendererInput, PageContext } from "./Types";


const FlexiLayoutRenderer = (props: FlexiLayoutRendererInput) => {
    const { layout, formContext } = props;
    const pageContext: PageContext = {formContext};
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
