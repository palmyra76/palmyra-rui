
import { FlexiLayoutRendererInput } from "./Types";
import FlexiLayoutGridRenderer from "./FlexiLayoutGridRenderer";
import FlexiLayoutFormRenderer from "./FlexiLayoutFormRenderer";
import { forwardRef } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

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

    const Renderer: any = getRenderer(type);

    return (
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            <Renderer {...props} ref={ref => {
                if (ref)
                    ref.current = ref;
            }} ></Renderer>
        </ErrorBoundary>
    );
});

export default FlexiLayoutRenderer;
