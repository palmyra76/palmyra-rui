/// <reference types="react" />
import { FormLayout } from './Definitions';
import { PageContext } from './Types';
interface EditFormRendererInput {
    formLayout: FormLayout;
    context: PageContext;
}
declare const FormRenderer: import("react").ForwardRefExoticComponent<EditFormRendererInput & import("react").RefAttributes<unknown>>;
export default FormRenderer;
