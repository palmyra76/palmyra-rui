import { ColumnDefinition } from "..";
import { FieldDefinition, FieldType } from "../../form/Definitions";
import { IDecoration, IPattern } from "../../form/interface";

interface GridField extends FieldDefinition, IPattern, IDecoration {

}

const convertToField = (columns: ColumnDefinition[]): FieldDefinition[] => {
    var result: FieldDefinition[] = [];

    columns.filter((c) => c.searchable).map((column, index) => {
        result.push(_convertField(column))
    })
    return result;
}

const _convertField = (column: ColumnDefinition): GridField => {
    var result: GridField = {
        attribute: column.attribute,
        label: column.label,
        required: false,
        // variant: "standard",  TODO - REF 
        type: _getType(column.type)
    }

    if (column.displayPattern) {
        result.displayPattern = column.displayPattern
    }
    if (column.serverPattern) {
        result.serverPattern = column.serverPattern
    }
    if (column.displayAttribute) {
        result.displayAttribute = column.displayAttribute
    }
    if (column.options) {
        result.options = column.options
    }

    return result;
}

const _getType = (type: FieldType): FieldType => {
    switch (type) {
        case 'select':
            return 'multiSelect';
        case 'radio':
            return 'checkbox';
        case 'date':
            return 'dateRange';
        case 'number':
            return 'string';
        default:
            return type;
    }
}

export { convertToField };