interface IInputField {
    focus: () => void;
    isValid: () => void;
    clear: () => void;
    getValue: () => any;
    setValue: (v: any) => void;
    setRequired: (a: boolean) => void;
}
interface IOptionsField {
    setOptions: (d: any) => void;
    getOptions: () => any;
}
interface ITextField extends IInputField {
}
interface IDateField extends IInputField {
    setCurrent: () => void;
}
interface ITimeField extends IInputField {
    setCurrent: () => void;
}
interface IDateTimeField extends IInputField {
    setCurrent: () => void;
}
interface ISelectField extends IInputField, IOptionsField {
}
interface IRadioGroupField extends IInputField, IOptionsField {
}
interface ICheckBoxField extends IInputField, IOptionsField {
}
interface IServerLookupField extends IInputField {
    setFilter: (d: any) => void;
    setDefaultFilter: (d: any) => void;
}
export type { ITextField, ICheckBoxField, IDateField, IDateTimeField, IRadioGroupField, ISelectField, IServerLookupField, ITimeField };
