/**
 * Custom Hook for form validation
 */
import { AttributeDefinition, FieldType, IFormFieldManager } from "./interface";
import { IFieldEventListener, IFieldValueListener, IFormHelper, FormMode } from "./Types";
declare function createFormHelper(): IFormHelper;
interface IListeners {
    eventListeners: Record<string, IFieldEventListener>;
    valueListeners: Record<string, IFieldValueListener>;
}
declare function useFormData(data: any, onValidityChange: any, mode: FormMode, formHelper?: IFormHelper, listeners?: IListeners): {
    getFieldManager: (field: AttributeDefinition, type: FieldType, ref: any) => IFormFieldManager;
    getFormData: (idProperty?: string) => {
        [x: string]: any;
    };
    isFormValid: () => boolean;
};
export { useFormData, createFormHelper };
