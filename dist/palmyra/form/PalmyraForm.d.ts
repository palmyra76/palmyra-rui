import { StoreFactory } from '../../main';
import { IFormCustomizer, FormMode } from './Types';

interface IPalmyraFormInput {
    children?: any;
    formData: any;
    onValidChange: Function;
    mode: FormMode;
    storeFactory?: StoreFactory<any>;
    customizer?: IFormCustomizer;
}
interface IPalmyraForm {
    getData: () => any;
    isValid: () => boolean;
}
declare const PalmyraForm: import('react').ForwardRefExoticComponent<IPalmyraFormInput & import("react").RefAttributes<unknown>>;
export { PalmyraForm };
export type { IPalmyraForm };
