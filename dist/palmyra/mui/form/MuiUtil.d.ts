import { AttributeDefinition, IDecoration } from '../../form/interface';
import { IMutateOptions } from '../../form/interfaceFields';

declare const copyMuiOptions: (props: AttributeDefinition, value: any, label?: string, mutateOptions?: IMutateOptions) => any;
declare const getFieldLabel: (props: AttributeDefinition & IDecoration) => string | import("react").JSX.Element;
export { copyMuiOptions, getFieldLabel };
