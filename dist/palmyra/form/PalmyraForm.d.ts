/// <reference types="react" />
import { FormMode } from "./Types";
interface IPalmyraFormInput {
    children?: any;
    formData: any;
    onValidChange: Function;
    mode: FormMode;
}
interface IPalmyraForm {
    getData: () => any;
    isValid: () => boolean;
}
declare const PalmyraForm: import("react").ForwardRefExoticComponent<IPalmyraFormInput & import("react").RefAttributes<unknown>>;
export { PalmyraForm };
export type { IPalmyraForm };
