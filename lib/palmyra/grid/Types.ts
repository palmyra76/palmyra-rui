import { AttributeDefinition } from "../form/Definitions";

interface ColumnDefinition extends AttributeDefinition {
    name: string,
    title: string,
    width?: string, // either in px  or percentage
    hideTitle?: boolean,
    hideColumn?: boolean,
    searchable?: boolean,
    sortable?: boolean,
    filter?: boolean,
    quickSearch?: boolean,
    cellRenderer?: React.FC
}


export type { ColumnDefinition };