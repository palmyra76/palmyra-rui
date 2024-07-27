import { IAbstractField, IDecoration } from '../../form/interface';

declare const copyMuiOptions: (props: IAbstractField, value: any, label?: string) => any;
declare const getFieldLabel: (props: IAbstractField & IDecoration) => string | import("react/jsx-runtime").JSX.Element;
export { copyMuiOptions, getFieldLabel };
