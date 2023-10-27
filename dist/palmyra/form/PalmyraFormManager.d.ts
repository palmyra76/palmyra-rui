/**
 * Custom Hook for form validation
 */
import { AttributeDefinition, FieldType, IFormFieldManager } from "./interface";
import { FormMode } from "./Types";
declare function createFormData(data: any, onValidityChange: any, mode: FormMode): {
    getFieldManager: (field: AttributeDefinition, type: FieldType) => IFormFieldManager;
    getFormData: () => any;
    initForm: () => void;
    isFormValid: () => boolean;
};
export { createFormData };
