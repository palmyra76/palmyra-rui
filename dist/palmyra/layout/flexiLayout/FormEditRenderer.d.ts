/// <reference types="react" />
import { FormContext } from '../../form/Types';
import { FormLayout } from './Definitions';
interface EditFormRendererInput {
    formLayout: FormLayout;
    formContext: FormContext;
}
declare const FormRenderer: import("react").ForwardRefExoticComponent<EditFormRendererInput & import("react").RefAttributes<unknown>>;
export default FormRenderer;
