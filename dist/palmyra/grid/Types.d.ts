/// <reference types="react" />
import { AttributeDefinition } from "../form/Definitions";
interface ColumnDefinition extends AttributeDefinition {
    name: string;
    title: string;
    width?: string;
    hideTitle?: boolean;
    hideColumn?: boolean;
    searchable?: boolean;
    sortable?: boolean;
    filter?: boolean;
    quickSearch?: boolean;
    cellRenderer?: React.FC;
}
export type { ColumnDefinition };
