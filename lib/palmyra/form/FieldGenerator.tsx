import { FieldDefinition } from './Definitions';
import { IGetFieldManager } from './interface';

import MuiTextField from '../mui/form/MuiTextField';
import MuiTextArea from '../mui/form/MuiTextArea';
import MuiRadioGroup from '../mui/form/MuiRadioGroup';
import MuiSelect from '../mui/form/MuiSelect';
import MuiDatePicker from '../mui/form/MuiDatePicker';
import MuiDateTimePicker from '../mui/form/MuiDateTimePicker';
import { MuiServerLookup } from '../mui';

const getInvalidField = (props: FieldRequest) => {
    const { fieldDef } = props;
    return <div>{"invalid type " + fieldDef.type} </div>
}

const getReactField = (props: FieldRequest, Input: React.FC) => {
    const fieldDef: any = props.fieldDef;
    return <Input
        getFieldManager={props.getFieldManager}
        {...fieldDef}
    />;
}

const getTobeImplemented = () => {
    return <div>To be Implemented</div>
}


const getField = (fieldDef: FieldDefinition, getFieldManager: IGetFieldManager, fieldRefs: any) => {
    const { type } = fieldDef;
    const props: FieldRequest = { fieldDef, getFieldManager };

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
            return getTobeImplemented();
        case 'serverlookup':
            return getReactField(props, MuiServerLookup);
        case 'textarea':
            return getReactField(props, MuiTextArea);
        default:
            return getInvalidField(props);
    }
};

export default getField;



interface FieldRequest {
    fieldDef: FieldDefinition,
    getFieldManager: IGetFieldManager
}
