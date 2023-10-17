import { getDisplayValue } from '../../form/FormUtil';
import { FieldDefinition, FormData } from '../../form/Definitions';

const ViewFieldProvider = (field: FieldDefinition, data: FormData) => {
    const displayValue: any = getDisplayValue(field, data);
    return <div>{displayValue}</div>;
}

const EditFieldProvider = (field: FieldDefinition, data: FormData) => {
    const displayValue = getDisplayValue(field, data);
    return displayValue;
}

export { ViewFieldProvider, EditFieldProvider };