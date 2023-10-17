
import ValidationTextField from './ValidationTextField';
import ValidationTextArea from './ValidationTextArea';
import { FieldContext } from './Types';
import { FieldDefinition, InputType, MuiFieldDef } from './Definitions';
import PalmyraRadioGroup from './PalmyraRadioGroup';
import PalmyraSelect from './PalmyraSelect';


// import ValidationDatePicker from './ValidationDatePicker';
// import ValidationDateTimePicker from './ValidationDateTimePicker';
// import PalmyraCheckBox from './PalmyraCheckBox';
// import ServerLookup from './ServerLookup';

const getTextField = (props: FieldRequest) => {
    const { fieldDef, fieldRuntime, fieldRefs, value } = props
    var fieldProps = getMuiFieldProps(fieldDef, value);
    return <ValidationTextField
        ref={ref => {
            fieldRefs.current[fieldDef.attribute] = ref;
        }}
        runtime={fieldRuntime}
        muiFieldDef={fieldProps}
        fieldDef={fieldDef}
        value={value}
    />;
}

const getTextArea = (props: FieldRequest) => {
    const { fieldDef, fieldRuntime, fieldRefs, value } = props;
    var fieldProps = getMuiFieldProps(fieldDef, value);
    return <ValidationTextArea
        ref={ref => {
            fieldRefs.current[fieldDef.attribute] = ref;
        }}
        runtime={fieldRuntime}
        muiFieldDef={fieldProps}
        fieldDef={fieldDef}
        value={value}
    />;
}

const getRadioField = (props: FieldRequest) => {
    const { fieldDef, fieldRuntime, fieldRefs, value } = props;
    var fieldProps = getMuiFieldProps(fieldDef, value);

    return <PalmyraRadioGroup
        ref={ref => {
            fieldRefs.current[fieldDef.attribute] = ref;
        }}
        runtime={fieldRuntime}
        muiFieldDef={fieldProps}
        fieldDef={fieldDef}
        value={value}
    />;
}

const getSelectField = (props: FieldRequest) => {
    const { fieldDef, fieldRuntime, fieldRefs, value } = props;
    var fieldProps = getMuiFieldProps(fieldDef, value);

    return <PalmyraSelect
        ref={ref => {
            fieldRefs.current[fieldDef.attribute] = ref;
        }}
        runtime={fieldRuntime}
        muiFieldDef={fieldProps}
        fieldDef={fieldDef}
        value={value}
    />;
}

const getInvalidField = (props: FieldRequest) => {
    const { fieldDef } = props;
    return <div>{"invalid type " + fieldDef.type} </div>
}

// const getDateField = ({ fieldProps, rule, fieldRefs }) => {
//     return <ValidationDatePicker
//         {...fieldProps}
//         dataFormat="YYYY-MM-DD"
//         format="DD-MM-YYYY"
//         slotProps={{ textField: { variant: 'standard', fullWidth: true } }}
//     />;
// }

// const getDateTimeField = ({ fieldProps, rule, fieldRefs }) => {
//     return <ValidationDateTimePicker
//         {...fieldProps}
//         dataFormat="DD-MM-YYYY hh:mm a"
//         format="DD-MM-YYYY hh:mm a"
//         slotProps={{ textField: { variant: 'standard', fullWidth: true } }}
//     />;
// }


// const getCheckBoxField = ({ fieldProps, rule, field, fieldRefs }) => {
//     const options = field.options || {};

//     return <PalmyraCheckBox
//         ref={ref => {
//             fieldRefs.current[fieldProps.name] = ref;
//         }}
//         {...fieldProps}
//         options={options}
//         constraint={rule}
//     />;
// }

// const getServerLookUp = ({ fieldProps, rule, field, fieldRefs }) => {

//     return <ServerLookup
//         ref={ref => {
//             fieldRefs.current[fieldProps.name] = ref;
//         }}
//         {...fieldProps}
//         constraint={rule}
//     />;
// }


interface FieldRequest {
    fieldDef: FieldDefinition,
    fieldRuntime: FieldContext,
    fieldRefs: any,
    value: InputType
}

const getMuiFieldProps = (field: FieldDefinition, fieldValue: InputType): MuiFieldDef => {
    return {
        value: fieldValue,
        required: field.required, disabled: field.disabled == true,
        variant: field.variant || 'standard'
    };
}

const getField = (fieldDef: FieldDefinition, fieldRuntime: FieldContext, fieldRefs: any, value: InputType) => {
    const { type } = fieldDef;
    const props: FieldRequest = { fieldDef, fieldRuntime, fieldRefs, value };
    switch (type) {
        case 'string':
            return getTextField(props);
        case 'radio':
            return getRadioField(props);
        case 'select':
            return getSelectField(props);

        // case 'date':
        //     return getDateField(props);
        // case 'datetime':    
        //     return getDateTimeField(props);
        // case 'checkbox':
        //     return getCheckBoxField(props);
        // case 'serverlookup':
        //     return getServerLookUp(props);
        case 'textarea':
            return getTextArea(props);
        default:
            return getInvalidField(props);
    }
};

export default getField;