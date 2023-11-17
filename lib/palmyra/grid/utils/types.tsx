
interface FieldDefinition {
    attribute: string,
    title: string,
    name?: string,
    searchable?: boolean,
    sortable?: boolean
}

interface IGridTextFieldDefinition extends FieldDefinition {

}

interface IGridSelectDefinition extends FieldDefinition {
    options: Record<any, any> | Record<string, any>
}

interface IGridCheckboxDefinition extends FieldDefinition {
    options: Record<any, any> | Record<string, any>
}

interface IGridRadioGroupDefinition extends FieldDefinition {
    options: Record<any, any> | Record<string, any>
}

interface IGridDateTimeDefinition extends FieldDefinition {
    serverPattern?: string,
    displayPattern?: string
}

interface IGridDateDefinition extends FieldDefinition {
    serverPattern?: string,
    displayPattern?: string
}

interface IGridTimeDefinition extends FieldDefinition {
    serverPattern?: string,
    displayPattern?: string
}

export type { IGridTextFieldDefinition, IGridSelectDefinition, IGridCheckboxDefinition, IGridRadioGroupDefinition }
export type { IGridDateTimeDefinition, IGridDateDefinition, IGridTimeDefinition }