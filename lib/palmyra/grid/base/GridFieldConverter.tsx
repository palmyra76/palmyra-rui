import { ColumnDefinition } from "..";
import { FieldDefinition, FieldType } from "../../form/Definitions";

const convertToField = (columns: ColumnDefinition[]): FieldDefinition[] => {
    var result: FieldDefinition[] = [];

    columns.map((column, index) => {
        result.push(_convertField(column))
    })
    return result;
}

const _convertField = (column: ColumnDefinition): FieldDefinition => {
    var result: FieldDefinition = {
        attribute: column.attribute,
        title: column.title,
        required: false,
        type: _getType(column.type)
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
        default:
            return type;
    }
}

export { convertToField };