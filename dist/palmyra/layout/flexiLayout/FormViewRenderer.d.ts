/// <reference types="react" />
import { FormLayout } from './Definitions';
import { PageContext } from './Types';
interface ViewFormRendererInput {
    formLayout: FormLayout;
    context: PageContext;
    FieldContainer?: React.FC;
}
declare const FormViewRenderer: (props: ViewFormRendererInput) => import("react/jsx-runtime").JSX.Element;
export default FormViewRenderer;
export type { ViewFormRendererInput };
