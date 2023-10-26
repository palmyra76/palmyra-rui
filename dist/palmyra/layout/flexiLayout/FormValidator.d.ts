/**
 * Custom Hook for form validation
 */
/// <reference types="react" />
import { FormMode } from "../../form/Types";
import { FlexiLayoutRendererInput } from "./Types";
declare function useFormValidator<T>(props: FlexiLayoutRendererInput<T>, mode: FormMode): {
    validationRules: {};
    formData: any;
    onDataChange: (updateData: any) => void;
    isValid: import("react").MutableRefObject<boolean>;
};
export { useFormValidator };
