import { FlexiLayoutRendererInput } from './Types';
import { FormMode } from '../../form/Types';

declare function useFormValidator<T>(props: FlexiLayoutRendererInput<T>, mode: FormMode): {
    validationRules: {};
    formData: any;
    onDataChange: (updateData: any) => void;
    isValid: import('react').MutableRefObject<boolean>;
};
export { useFormValidator };
