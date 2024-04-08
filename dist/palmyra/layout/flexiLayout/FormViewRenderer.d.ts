import { PageContext } from './Types';
import { FormLayout } from './Definitions';

interface ViewFormRendererInput {
    formLayout: FormLayout;
    context: PageContext;
    FieldContainer?: React.FC;
}
declare const FormViewRenderer: (props: ViewFormRendererInput) => import("react/jsx-runtime").JSX.Element;
export default FormViewRenderer;
export type { ViewFormRendererInput };
