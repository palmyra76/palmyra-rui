import { IGridDateDefinition, IGridDateTimeDefinition, IGridSelectDefinition, IGridTextFieldDefinition, IGridTimeDefinition } from './types';

declare class GridColumnsBuilder {
    columns: any;
    addTextField(d: IGridTextFieldDefinition): this;
    addSelectField(d: IGridSelectDefinition): this;
    addDateField(d: IGridDateDefinition): this;
    addTimeField(d: IGridTimeDefinition): this;
    addDateTimeField(d: IGridDateTimeDefinition): this;
    addNumberField(d: IGridTextFieldDefinition): this;
    build(): any;
}
export { GridColumnsBuilder };
