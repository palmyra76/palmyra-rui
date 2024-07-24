import { IMutateOptions } from '../../form/interfaceFields';
import { AttributeDefinition, IDecoration } from '../../form/interface';

declare const copyMuiOptions: (props: AttributeDefinition, value: any, label?: string, mutateOptions?: IMutateOptions) => any;
declare const getFieldLabel: (props: AttributeDefinition & IDecoration) => string | import("react/jsx-runtime").JSX.Element;
export { copyMuiOptions, getFieldLabel };
