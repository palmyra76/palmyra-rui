import Grid from "../grid/Grid";
import { GridProperties } from "../grid/Types";
import { view, viewDes } from "./options/view";

const ViewDefn = () => {

    const ViewImport = `import { TextView } from "palmyra/TextView",
import { OptionsView } from "palmyra/OptionsView",
import { LookupView } from "palmyra/LookupView",
import { DateView } from "palmyra/DateView"`

    const data: GridProperties = [
        { property: 'attribute *', type: 'string', description: 'The attribute is connected to a database table column name.' },
        { property: 'variant', type: `'standard' | 'outlined'`, description: `The variant to use. Default 'standard.'` },
        { property: 'title', type: 'string', description: `The title of the Text Field.` },
        { property: 'label', type: 'string', description: `The label of the Text Field.` },
        { property: 'customContainerClass', type: 'string', description: `Override or extend the container style.` },
        { property: 'customFieldClass', type: 'string', description: `Override or extend the field style.` },
        { property: 'customLabelClass', type: 'string', description: `Override or extend the label style.` },
        { property: 'className', type: 'string', description: `Customize the text field style.` },
        { property: 'colspan', type: 'number', description: `Colspan specifies the number of columns a cell should span.` },
        { property: 'fieldProps', type: `'small' | 'medium' | 'large'`, description: `The size of the input element.` },
        { property: 'Date View', type: 'displayPattern: string', description: 'Format of the display date.' },
        { property: 'Lookup View', type: view(), description: viewDes() },
        { property: 'Options View', type: 'options: Record<any, any> | Record<string, any>', description: 'Options defines two or more options for a component.' }
    ]

    return (
        <div>
            <Grid data={data} header="View API" import={ViewImport} />
        </div>
    )

}

export default ViewDefn;