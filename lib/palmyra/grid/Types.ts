import { AttributeDefinition } from "../form/Definitions";

interface ColumnDefinition extends AttributeDefinition{
    name: string,    
    title: string,
    hideTitle?: boolean,    
    displayFormat?: string,
    searchable?: boolean,
    sortable?: boolean,
    quickSearch?: boolean,
    cellRenderer: React.FC
}


export type { ColumnDefinition };