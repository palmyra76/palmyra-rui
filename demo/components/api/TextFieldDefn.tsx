import Grid from "../grid/Grid";
import { GridProperties } from "../grid/Types";
import { length, lengthDes } from "./options/Validation";
import { eventListener, eventListenerDes, valueListener, valueListenerDes } from "./options/listener";

const TextFieldDefn = () => {

    const TextFieldImport = `import { MuiTextField } from "palmyra/MuiTextField"`

    const data: GridProperties = [
        { property: 'attribute *', type: 'string', description: 'The attribute is connected to a database table column name.' },
        { property: 'required', type: 'boolean', description: 'The field is mandatory.' },
        { property: 'missingMessage', type: 'string', description: 'When a required value is missing.' },
        { property: 'invalidMessage', type: 'string', description: 'When the value is invalid.' },
        { property: 'errorMessage', type: 'string', description: 'When the value is invalid or that specified rule is invalid.' },
        { property: 'width', type: 'string', description: 'The width of the component.' },
        { property: 'name', type: 'string', description: 'The name of the text field.' },
        { property: 'defaultValue', type: 'string | number | Date', description: 'The default value in an input field is the initial content displayed before any user input.' },
        { property: 'value', type: 'string | number | Date', description: 'The value is the content of the input element.' },
        { property: 'readonly', type: 'boolean', description: `if readonly is true the input field makes it so that users can see the content but can't change it.` },
        { property: 'disabled', type: 'boolean', description: `if disabled is true the users can't click on it or type anything.` },
        { property: 'visible', type: 'boolean', description: `if visible is false the users can't see the field.` },
        { property: 'mutant', type: 'boolean', description: `Mutant has been changed or mutated from its original state.` },
        { property: 'placeHolder', type: 'string', description: `The short hint displayed in the input before the user enters a value.` },
        { property: 'autoFocus', type: 'boolean', description: `If autoFocus is true the input element is focused during the first mount.` },
        { property: 'eventListener', type: eventListener(), description: eventListenerDes() },
        { property: 'valueListener', type: valueListener(), description: valueListenerDes() },
        { property: 'labelMode', type: `'header' | 'title'`, description: `There are two types of labels: one follows the Material-UI (MUI) label model, and the other is a left-side title for the field.` },
        { property: 'label', type: 'string', description: `The label of the Text Field.` },
        { property: 'hideLabel', type: 'boolean', description: `Hide the label.` },
        { property: 'customContainerClass', type: 'string', description: `Override or extend the container style.` },
        { property: 'customFieldClass', type: 'string', description: `Override or extend the field style.` },
        { property: 'customLabelClass', type: 'string', description: `Override or extend the label style.` },
        { property: 'className', type: 'string', description: `Customize the text field style.` },
        { property: 'colspan', type: 'number', description: `Colspan specifies the number of columns a cell should span.` },
        { property: 'length', type: length(), description: lengthDes() },
        { property: 'validRule', type: 'inbuiltValidators | string[]', description: `Specified some rules for validation in the built-in.` },
        { property: 'regExp', type: 'RegExp', description: `Regex are patterns used to match character combinations in strings.` },
        { property: 'validFn', type: 'Function', description: `Custom function for validation.` },
        { property: 'variant', type: `'standard' | 'outlined' | 'filled'`, description: `The variant to use. Default 'standard.'` },
        { property: 'fieldProps', type: `'small' | 'medium' | 'large'`, description: `The size of the input element.` }
    ]

    return (
        <div>
            <Grid data={data} header="Text Field API" import={TextFieldImport} />
        </div>
    )

}

export default TextFieldDefn;