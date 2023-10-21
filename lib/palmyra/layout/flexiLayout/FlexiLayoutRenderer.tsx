
import { FlexiLayoutRendererInput } from "./Types";
import FlexiLayoutGridRenderer from "./FlexiLayoutGridRenderer";
import FlexiLayoutFormRenderer from "./FlexiLayoutFormRenderer";
import { forwardRef } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

import { LayoutParamsContext, StoreFactoryContext } from "./FlexiLayoutContext";

const getRenderer = (type: string): React.FC => {
    switch (type) {
        case 'grid':
            return FlexiLayoutGridRenderer;
        case 'formEdit':
        case 'form':
            return FlexiLayoutFormRenderer;
        default:
            return FlexiLayoutGridRenderer;
    }
}


const FlexiLayoutRenderer = forwardRef(function FlexiLayoutRenderer<T>(props: FlexiLayoutRendererInput<T>, ref) {
    const { layout } = props;
    const type = layout.type ? layout.type : "grid";
    const layoutParams = props.layoutParams || {};
    const Renderer: any = getRenderer(type);

    return (
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <StoreFactoryContext.Provider value={props.storeFactory}>
                <LayoutParamsContext.Provider value={layoutParams}>
                    <Renderer {...props} ref={ref => {
                        if (ref)
                            ref.current = ref;
                    }} ></Renderer>
                </LayoutParamsContext.Provider>
            </StoreFactoryContext.Provider>
        </ErrorBoundary>
    );
});

export default FlexiLayoutRenderer;
