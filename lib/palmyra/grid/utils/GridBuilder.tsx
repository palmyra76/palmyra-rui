import { IGridDateDefinition, IGridDateTimeDefinition, IGridSelectDefinition, IGridTextFieldDefinition, IGridTimeDefinition } from "./types";

class GridColumnsBuilder {
    columns: any = [];
    
    addTextField(d: IGridTextFieldDefinition) {
        this.columns.push({ type: 'string', ...d });
        return this;
    }

    addSelectField(d: IGridSelectDefinition) {
        this.columns.push({ type: 'select', ...d });
        return this;
    }

    addDateField(d: IGridDateDefinition) {
        this.columns.push({ type: 'date', ...d });
        return this;
    }

    addTimeField(d: IGridTimeDefinition) {
        this.columns.push({ type: 'time', ...d });
        return this;
    }

    addDateTimeField(d: IGridDateTimeDefinition) {
        this.columns.push({ type: 'datetime', ...d });
        return this;
    }

    addNumberField(d: IGridTextFieldDefinition) {
        this.columns.push({ type: 'number', ...d });
        return this;
    }

    build() {
        return this.columns;
    }
}


export { GridColumnsBuilder }