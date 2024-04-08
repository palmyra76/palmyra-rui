import { FieldDefinition, FormData } from '../../form/Definitions';

declare const ViewFieldProvider: (field: FieldDefinition, data: FormData) => import("react/jsx-runtime").JSX.Element;
declare const EditFieldProvider: (field: FieldDefinition, data: FormData) => import('../../form/Definitions').InputType;
export { ViewFieldProvider, EditFieldProvider };
