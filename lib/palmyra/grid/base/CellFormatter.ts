
import { ColumnDefinition } from "..";
import { FieldDefinition } from "../../form/Definitions";
import { formatValue, getDisplayValue } from "../../form/FormUtil";

const formatBIT = (columnDef) => {
    var pattern = columnDef.displayPattern || [{ "1": "Yes" }, { "0": "No" }];
    var data = {};
    if (Array.isArray(pattern)) {
        for (var idx in pattern) {
            data = { ...data, ...pattern[idx] };
        }
    }

    return (info) => {
        const value = info.getValue();
        if (value) {
            if (data[value])
                return data[value];
        }

        if (value)
            return data[1];
        else
            return data[0];
    }
}


const formatColumn = (columnDef: ColumnDefinition) => {
    return (info) => {        
        return formatValue(columnDef, info.getValue());
    }
}


const getFormatFn = (columnDef) => {
    const formatter = formatColumn(columnDef);
    return { cell: formatter };
}

export { getFormatFn, formatBIT }