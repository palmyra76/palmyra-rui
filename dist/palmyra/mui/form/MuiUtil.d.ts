import { AttributeDefinition, IDecoration } from "../../form/interface";
declare const copyMuiOptions: (props: AttributeDefinition, value: any, label?: string) => any;
declare const getFieldLabel: (props: AttributeDefinition & IDecoration) => string;
export { copyMuiOptions, getFieldLabel };
