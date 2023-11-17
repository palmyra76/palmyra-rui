import { CellContext, RowData } from "@tanstack/react-table";
import { AttributeDefinition } from "../form/Definitions";

interface ColumnDefinition extends AttributeDefinition {
    name: string,
    title: string,
    width?: string, // either in px  or percentage
    hideTitle?: boolean,
    hideColumn?: boolean,
    searchable?: boolean,
    sortable?: boolean,
    quickSearch?: boolean,
    cellRenderer?: React.FC
}

type CellGetter = ((props: CellContext<RowData, any>) => any);


interface GridCustomizer {
    formatCell: (column: ColumnDefinition, cellValueGetter: CellGetter) => CellGetter,
    formatHeader: (column: ColumnDefinition, header: Function) => any,
}

const NoopCustomizer: GridCustomizer = {
    formatCell: function (column: ColumnDefinition, cellValueGetter: CellGetter): CellGetter {
        return cellValueGetter;
    },
    formatHeader: function (column: ColumnDefinition, header: Function) {
        return header;
    }
}

const gridColumnCustomizer = (config: Record<string, ((d: CellGetter) => CellGetter)>): GridCustomizer => {
    return {
        formatCell: function (column: ColumnDefinition, cellValueGetter: CellGetter)
            : CellGetter {
            const attribute = column.attribute;
            if (config[attribute]) {
                return config[attribute](cellValueGetter);
            } else
                return cellValueGetter;
        },
        formatHeader: function (column: ColumnDefinition, header: Function) {
            return header;
        }
    }
}

export type { ColumnDefinition, GridCustomizer, CellGetter };
export { NoopCustomizer, gridColumnCustomizer }