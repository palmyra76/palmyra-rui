
import { FlexiLayoutRendererInput } from "./Types";
import FlexiLayoutGridRenderer from "./FlexiLayoutGridRenderer";
import { forwardRef } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

import { LayoutParamsContext, StoreFactoryContext } from "./FlexiLayoutContext";
import { flexiPrimaryType } from ".";
import FlexiLayoutFormRenderer from "./FlexiLayoutFormRenderer";

const getRenderer = (type: flexiPrimaryType | 'form'): React.FC => {
    switch (type) {
        case 'grid':
            return FlexiLayoutGridRenderer;
        case 'form':
            console.info("type is provided as 'form', defaulting to formEdit mode");
            return FlexiLayoutFormRenderer;
        case 'formEdit':
        case 'formNew':
        case 'formView':
            return FlexiLayoutFormRenderer;
        default:
            return FlexiLayoutGridRenderer;
    }
}


const FlexiLayoutRenderer = forwardRef(function FlexiLayoutRenderer<T>(props: FlexiLayoutRendererInput<T>, ref) {
    const { layout } = props;
    const type = props.mode ? props.mode : layout.type ? layout.type : "grid";
    const layoutParams = props.layoutParams || {};
    const Renderer: any = getRenderer(type);

    return (
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <StoreFactoryContext.Provider value={props.storeFactory}>
                <LayoutParamsContext.Provider value={layoutParams}>
                    <Renderer {...props} ref={r => {
                        if (ref)
                            ref.current = r;
                    }} ></Renderer>
                </LayoutParamsContext.Provider>
            </StoreFactoryContext.Provider>
        </ErrorBoundary>
    );
});

export default FlexiLayoutRenderer;
