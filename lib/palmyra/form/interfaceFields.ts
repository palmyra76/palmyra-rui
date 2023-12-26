import { Pagination } from "../../palmyra/store/Types"

interface IInputField {
    focus: () => void
    isValid: () => void
    clear: () => void
    getValue: () => any
    setValue: (v: any) => void,
    setRequired: (required: boolean) => void
    setReadOnly: (readonly: boolean) => void
    setVisible: (visible: boolean) => void
    setAttribute: (options: IMutateOptions) => void
}

interface IOptionsField {
    setOptions: (d: any) => void
    getOptions: () => any
}

interface IMutateOptions {
    required?: boolean
    readonly?: boolean
    visible?: boolean
}

interface ITextField extends IInputField {

}

interface IDateField extends IInputField {
    setCurrent: () => void
}

interface ITimeField extends IInputField {
    setCurrent: () => void
}

interface IDateTimeField extends IInputField {
    setCurrent: () => void
}

interface ISelectField extends IInputField, IOptionsField {

}

interface IRadioGroupField extends IInputField, IOptionsField {

}

interface ICheckBoxField extends IInputField, IOptionsField {

}

interface ISwitchField extends IInputField, IOptionsField {

}

interface IQueryable {
    setFilter: (d: any) => void
    resetFilter: () => void,
    refresh: () => void,
    setEndPointOptions: (d: any) => void,
    addFilter: (key: string, v: any) => void,
    setSortOptions: (d: any) => void
    getCurrentData: () => Array<any>
}

interface IPageQueryable extends IQueryable {
    setQueryLimit: (d: Pagination) => void
    getQueryLimit: () => Pagination
}

interface IServerLookupField extends IInputField, IQueryable {
    setDefaultFilter: (d: any) => void
}

export type { IMutateOptions, IQueryable, IInputField, IPageQueryable }

export type { ITextField, ICheckBoxField, IDateField, IDateTimeField, IRadioGroupField, ISelectField, IServerLookupField, ITimeField, ISwitchField }