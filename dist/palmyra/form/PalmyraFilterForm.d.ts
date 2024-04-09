/// <reference types="react" />
import { IFormCustomizer, FormMode } from "./Types";
import { StoreFactory } from "../../main";
interface IPalmyraFilterFormInput {
    children?: any;
    formData: any;
    mode: FormMode;
    storeFactory?: StoreFactory<any>;
    customizer?: IFormCustomizer;
}
interface IPalmyraFilterForm {
    getFilterData: () => any;
}
declare const PalmyraFilterForm: import("react").ForwardRefExoticComponent<IPalmyraFilterFormInput & import("react").RefAttributes<unknown>>;
export { PalmyraFilterForm };
export type { IPalmyraFilterForm };
