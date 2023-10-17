
import ValidationTextField from './ValidationTextField';
import ValidationTextArea from './ValidationTextArea';
import { FieldContext } from './Types';
import { FieldDefinition, InputType } from './Definitions';


// import ValidationDatePicker from './ValidationDatePicker';
// import PalmyraRadioGroup from './PalmyraRadioGroup';
// import PalmyraSelect from './PalmyraSelect';
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
        fieldDef={fieldProps}
        value={value}
    />;
}

const getTextArea = (props: FieldRequest) => {
    const { fieldDef, fieldRuntime, fieldRefs, value } = props
    return <ValidationTextArea
        ref={ref => {
            fieldRefs.current[fieldDef.attribute] = ref;
        }}
        runtime={fieldRuntime}
        fieldDef={fieldDef}
        value={value}
    />;
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

// const getRadioField = ({ fieldProps, field, rule, fieldRefs }) => {
//     const options = field.options || {};

//     return <PalmyraRadioGroup
//         ref={ref => {
//             fieldRefs.current[fieldProps.name] = ref;
//         }}
//         {...fieldProps}
//         options={options}
//         constraint={rule}
//     />;
// }

// const getSelectField = ({ fieldProps, rule, field, fieldRefs }) => {
//     const options = field.options || {};

//     return <PalmyraSelect
//         ref={ref => {
//             fieldRefs.current[fieldProps.name] = ref;
//         }}
//         {...fieldProps}
//         menu={options}
//         constraint={rule}
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

const getMuiFieldProps = (field: FieldDefinition, fieldValue: InputType): FieldDefinition => {
    var disabled = field.disabled;
    var defaultValue = field.defaultValue;
    var variant = field.variant || "standard";
    // var targetUrl = field.targetUrl || {};
    if (disabled) {
        return { ...field, variant, disabled: disabled, defaultValue };
    } else {
        return { ...field, variant, defaultValue };
    }
}

const getField = (fieldDef: FieldDefinition, fieldRuntime: FieldContext, fieldRefs: any, value: InputType) => {
    const { type } = fieldDef;
    const props: FieldRequest = { fieldDef, fieldRuntime, fieldRefs, value };
    switch (type) {
        // case 'date':
        //     return getDateField(props);
        // case 'radio':
        //     return getRadioField(props);
        // case 'select':
        //     return getSelectField(props);
        // case 'datetime':
        //     return getDateTimeField(props);
        // case 'checkbox':
        //     return getCheckBoxField(props);
        // case 'serverlookup':
        //     return getServerLookUp(props);
        case 'textarea':
            return getTextArea(props);
        default:
            return getTextField(props);
    }
};

export default getField;