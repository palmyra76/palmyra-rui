import { FieldDefinition } from './Definitions';

import MuiTextField from '../mui/form/MuiTextField';
import MuiTextArea from '../mui/form/MuiTextArea';
import MuiRadioGroup from '../mui/form/MuiRadioGroup';
import MuiSelect from '../mui/form/MuiSelect';
import MuiDatePicker from '../mui/form/MuiDatePicker';
import MuiDateTimePicker from '../mui/form/MuiDateTimePicker';
import { MuiPassword, MuiServerLookup } from '../mui';
import MuiCheckBox from '../mui/form/MuiCheckBox';
import MuiSwitch from '../mui/form/MuiSwitch';

const getInvalidField = (props: FieldRequest) => {
    const { fieldDef } = props;
    return <div>{"invalid type " + fieldDef.type} </div>
}

const getReactField = (props: FieldRequest, Input: React.FC) => {
    const fieldDef: any = props.fieldDef;
    return <Input
        {...fieldDef}
        label={props.title}
    />;
}

const getTobeImplemented = () => {
    return <div>To be Implemented</div>
}

const getField = (fieldDef: FieldDefinition, fieldRefs: any, title?: any) => {
    const { type } = fieldDef;
    const props: FieldRequest = { fieldDef, title };

    switch (type) {
        case 'string':
            return getReactField(props, MuiTextField);
        case 'radio':
            return getReactField(props, MuiRadioGroup);
        case 'select':
            return getReactField(props, MuiSelect);
        case 'date':
            return getReactField(props, MuiDatePicker);
        case 'datetime':
            return getReactField(props, MuiDateTimePicker);
        case 'checkbox':
            return getReactField(props, MuiCheckBox);
        case 'serverlookup':
            return getReactField(props, MuiServerLookup);
        case 'textarea':
            return getReactField(props, MuiTextArea);
        case 'switch':
            return getReactField(props, MuiSwitch);
        case 'password':
            return getReactField(props, MuiPassword);
        case 'multiSelect':
            return getTobeImplemented();
        case 'dateRange':
            return getTobeImplemented();
        default:
            return getInvalidField(props);
    }
};

export default getField;

interface FieldRequest {
    fieldDef: FieldDefinition,
    title?: string
}
