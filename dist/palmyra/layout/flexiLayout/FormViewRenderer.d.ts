/// <reference types="react" />
import { FormData } from '../../form/Definitions';
import { FormLayout } from './Definitions';
interface ViewFormRendererInput {
    formLayout: FormLayout;
    data: FormData;
    FieldContainer?: React.FC;
}
declare const FormViewRenderer: (props: ViewFormRendererInput) => import("react/jsx-runtime").JSX.Element;
export default FormViewRenderer;
export type { ViewFormRendererInput };
