import Grid from "../grid/Grid";
import { GridProperties } from "../grid/Types";
import { eventListener, eventListenerDes, valueListener, valueListenerDes } from "./options/listener";

const SelectFieldDefn = () => {

    const SelectImport = `import { MuiSelect } from "palmyra/MuiSelect"`


    const data: GridProperties = [
        { property: 'attribute *', type: 'string', description: 'The attribute is connected to a database table column name.' },
        { property: 'defaultValue', type: 'string | number | Date', description: 'The default value in an input field is the initial content displayed before any user input.' },
        { property: 'value', type: 'string | number | Date', description: 'The value is the content of the input element.' },
        { property: 'required', type: 'boolean', description: 'The field is mandatory.' },
        { property: 'readonly', type: 'boolean', description: `if readonly is true the input field makes it so that users can see the content but can't change it.` },
        { property: 'disabled', type: 'boolean', description: `if disabled is true the users can't click on it or type anything.` },
        { property: 'autoFocus', type: 'boolean', description: `if autoFocus is true the input element is focused during the first mount.` },
        { property: 'variant', type: `'standard' | 'outlined' | 'filled'`, description: `The variant to use. Default 'standard'.` },
        { property: 'title', type: 'string', description: `The title of the select field.` },
        { property: 'label', type: 'string', description: `The label of the select field.` },
        { property: 'customContainerClass', type: 'string', description: `Override or extend the container style.` },
        { property: 'customFieldClass', type: 'string', description: `Override or extend the field style.` },
        { property: 'customLabelClass', type: 'string', description: `Override or extend the label style.` },
        { property: 'className', type: 'string', description: `Customize the select field style.` },
        { property: 'colspan', type: 'number', description: `Colspan specifies the number of columns a cell should span.` },
        { property: 'fieldProps', type: `'small' | 'medium' | 'large'`, description: `The size of the input element.` },
        { property: 'eventListener', type: eventListener(), description: eventListenerDes() },
        { property: 'valueListener', type: valueListener(), description: valueListenerDes() },
        { property: 'options', type: `Record<any, any> | Record<string, any> | { value: any, label: string }[]`, description: `Options defines two or more options for a Select component.` }
    ]

    return (
        <div>
            <Grid data={data} header="Select Field API" import={SelectImport} />
        </div>
    )

}

export default SelectFieldDefn;