import { AttributeDefinition, InputType, FormData } from './Definitions';

declare const getValueByKey: (fieldName: string, data: any) => InputType;
declare const setValueByKey: (fieldName: string, data: any, value: InputType) => void;
declare const getDisplayValue: (field: AttributeDefinition, data: FormData) => any;
declare const formatValue: (field: AttributeDefinition, value: any) => any;
export { getValueByKey, setValueByKey, getDisplayValue, formatValue };
