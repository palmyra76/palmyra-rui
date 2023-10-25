import { FieldProperties } from "./Types";
import { FieldValidStatus } from "./Definitions";
interface Callbacks {
    onBlur: Function;
    onFocus: Function;
    onChange: Function;
}
interface useValidatorResponse {
    data: any;
    setData: Function;
    error: FieldValidStatus;
    fieldCallbacks: Callbacks;
}
declare function useValidator(props: FieldProperties): useValidatorResponse;
export default useValidator;
