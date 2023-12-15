import { ColumnDefinition } from "..";
import { FieldDefinition, FieldType } from "../../form/Definitions";

const convertToField = (columns: ColumnDefinition[]): FieldDefinition[] => {
    var result: FieldDefinition[] = [];

    columns.filter((c) => c.searchable).map((column, index) => {
        result.push(_convertField(column))
    })
    return result;
}

const _convertField = (column: ColumnDefinition): FieldDefinition => {
    var result: FieldDefinition = {
        attribute: column.attribute,
        label: column.title,
        required: false,
        variant: "standard",
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