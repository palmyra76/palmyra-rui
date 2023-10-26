
import { FlexiLayoutRendererInput } from "./Types";
import FlexiLayoutGridRenderer from "./FlexiLayoutGridRenderer";
import { forwardRef } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

import { LayoutParamsContext, StoreFactoryContext } from "./FlexiLayoutContext";
import FlexiLayoutFormViewRenderer from "./FlexiLayoutFormViewRenderer";
import FlexiLayoutFormEditRenderer from "./FlexiLayoutFormEditRenderer";
import FlexiLayoutFormNewRenderer from "./FlexiLayoutFormNewRenderer";

const getRenderer = (type: string): React.FC => {
    switch (type) {
        case 'grid':
            return FlexiLayoutGridRenderer;
        case 'form':
            console.info("type is provided as 'form', defaulting to formEdit mode");
            return FlexiLayoutFormEditRenderer;
        case 'formEdit':
            return FlexiLayoutFormEditRenderer;
        case 'formNew':
            return FlexiLayoutFormNewRenderer;
        case 'formView':
            return FlexiLayoutFormViewRenderer;
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
                        console.log('assigning refe ')
                        if (ref)
                            ref.current = r;
                    }} ></Renderer>
                </LayoutParamsContext.Provider>
            </StoreFactoryContext.Provider>
        </ErrorBoundary>
    );
});

export default FlexiLayoutRenderer;
