/**
 * Custom Hook for form validation
 */
import { IGetFieldManager } from "./interface";
import { IFieldEventListener, IFieldValueListener, IFormHelper, FormMode } from "./Types";
declare function createFormHelper(): IFormHelper;
interface IListeners {
    changeListeners: Record<string, IFieldEventListener>;
    valueListeners: Record<string, IFieldValueListener>;
}
declare function createFormData(data: any, onValidityChange: any, mode: FormMode, formHelper?: IFormHelper, listeners?: IListeners): {
    getFieldManager: IGetFieldManager;
    getFormData: () => any;
    initForm: () => void;
    isFormValid: () => boolean;
};
export { createFormData, createFormHelper };
