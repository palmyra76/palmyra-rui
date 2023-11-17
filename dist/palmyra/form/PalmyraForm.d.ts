/// <reference types="react" />
import { FormMode } from "./Types";
import { StoreFactory } from "../../main";
interface IPalmyraFormInput {
    children?: any;
    formData: any;
    onValidChange: Function;
    mode: FormMode;
    storeFactory?: StoreFactory<any>;
}
interface IPalmyraForm {
    getData: () => any;
    isValid: () => boolean;
}
declare const PalmyraForm: import("react").ForwardRefExoticComponent<IPalmyraFormInput & import("react").RefAttributes<unknown>>;
export { PalmyraForm };
export type { IPalmyraForm };
