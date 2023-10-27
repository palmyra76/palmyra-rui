
import ValidationTextField from './ValidationTextField';
import ValidationTextArea from './ValidationTextArea';
import { FieldContext } from './Types';
import { FieldDefinition, FormData, InputType, MuiFieldDef } from './Definitions';
import PalmyraRadioGroup from './PalmyraRadioGroup';
import PalmyraSelect from './PalmyraSelect';
import ValidationDatePicker from './ValidationDatePicker';
import ValidationDateTimePicker from './ValidationDateTimePicker';

// Slider input
// Rating input
// import PalmyraCheckBox from './PalmyraCheckBox';
import ServerLookup from './ServerLookup';
import { LayoutParamsContext, StoreFactoryContext } from '../layout/flexiLayout/FlexiLayoutContext';
import { useContext } from 'react';
import { mergeDeep } from '../utils';
import { getValueByKey } from './FormUtil';

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

const getDateField = (props: FieldRequest) => {
    const { fieldDef, fieldRuntime, fieldRefs, value } = props;
    var fieldProps = getMuiFieldProps(fieldDef, value);

    return <ValidationDatePicker
        ref={ref => {
            fieldRefs.current[fieldDef.attribute] = ref;
        }}
        {...fieldProps}
        runtime={fieldRuntime}
        muiFieldDef={fieldProps}
        fieldDef={fieldDef}
        value={value}
    />;
}

const getDateTimeField = (props: FieldRequest) => {
    const { fieldDef, fieldRuntime, fieldRefs, value } = props;
    var fieldProps = getMuiFieldProps(fieldDef, value);

    return <ValidationDateTimePicker
        ref={ref => {
            fieldRefs.current[fieldDef.attribute] = ref;
        }}
        {...fieldProps}
        runtime={fieldRuntime}
        muiFieldDef={fieldProps}
        fieldDef={fieldDef}
        value={value}
    />;
}


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

const getServerLookUp = (props: FieldRequest) => {
    const storeFactory = useContext(StoreFactoryContext);
    const layoutParams = useContext(LayoutParamsContext);

    const { fieldDef, fieldRuntime, fieldRefs, value, displayValue } = props
    var storeOptions = fieldDef.storeOptions || {};
    if (layoutParams) {
        mergeDeep(storeOptions, layoutParams);
    }
    const store = storeFactory.getGridStore(storeOptions);

    var fieldProps = getMuiFieldProps(fieldDef, value);
    return <ServerLookup
        ref={ref => {
            fieldRefs.current[fieldDef.attribute] = ref;
        }}
        store={store}
        runtime={fieldRuntime}
        muiFieldDef={fieldProps}
        fieldDef={fieldDef}
        value={value}
        displayValue={displayValue}
    />;
}


interface FieldRequest {
    fieldDef: FieldDefinition,
    fieldRuntime: FieldContext,
    fieldRefs: any,
    value: InputType,
    displayValue?: InputType
}

const getMuiFieldProps = (field: FieldDefinition, fieldValue: InputType): MuiFieldDef => {
    return {
        value: fieldValue,
        required: field.required, disabled: field.disabled == true,
        variant: field.variant || 'standard'
    };
}

const getFieldRequest = (fieldDef: FieldDefinition, fieldRuntime: FieldContext, fieldRefs: any, data: FormData) => {
    const value = getValueByKey(fieldDef.attribute, data);
    if (fieldDef.displayAttribute) {
        const displayValue = getValueByKey(fieldDef.displayAttribute, data);
        return { fieldDef, fieldRuntime, fieldRefs, value, displayValue };
    } else {
        return { fieldDef, fieldRuntime, fieldRefs, value };
    }
}

const getField = (fieldDef: FieldDefinition, fieldRuntime: FieldContext, fieldRefs: any, data: FormData) => {
    const { type } = fieldDef;
    const props: FieldRequest = getFieldRequest(fieldDef, fieldRuntime, fieldRefs, data);

    switch (type) {
        case 'string':
            return getTextField(props);
        case 'radio':
            return getRadioField(props);
        case 'select':
            return getSelectField(props);
        case 'date':
            return getDateField(props);
        case 'datetime':
            return getDateTimeField(props);
        // case 'checkbox':
        //     return getCheckBoxField(props);
        case 'serverlookup':
            return getServerLookUp(props);
        case 'textarea':
            return getTextArea(props);
        default:
            return getInvalidField(props);
    }
};

export default getField;