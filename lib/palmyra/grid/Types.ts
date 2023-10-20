type FieldType = "string" | "number"
    | "date" | "radio" | "select"
    | "datetime" | "textarea" | "checkbox" | "serverlookup";

interface ColumnDefinition {
    name: string,
    attribute: string,
    title: string,
    hideTitle?: boolean,
    type: FieldType,
    displayFormat?: string,
    searchable?: boolean,
    sortable?: boolean,
    quickSearch?: boolean,
    cellRenderer: React.FC
}


export type { ColumnDefinition };