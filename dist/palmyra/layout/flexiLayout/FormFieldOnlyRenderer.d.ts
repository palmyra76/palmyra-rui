import { PageContext } from './Types';
import { FormLayout } from './Definitions';

interface EditFormRendererInput {
    formLayout: FormLayout;
    context: PageContext;
}
declare const FormFieldOnlyRenderer: import('react').ForwardRefExoticComponent<EditFormRendererInput & import("react").RefAttributes<unknown>>;
export default FormFieldOnlyRenderer;
