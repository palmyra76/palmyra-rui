import { IAutoCompleteDefinition, ICheckboxDefinition, ICheckboxGroupDefinition, IDatePickerDefinition, IDateTimePickerDefinition, IIntegerFieldDefinition, INumberFieldDefinition, IPasswordDefinition, IRadioGroupDefinition, IRangeSliderDefinition, IRatingFieldDefinition, ISelectDefinition, IServerCheckboxDefinition, IServerLookupDefinition, ISwitchDefinition, ITextFieldDefinition } from "../../form/interface";

interface IFieldProps {
    size?: 'small' | 'medium' | 'large'
}

interface IMuiAttribs {
    variant?: 'standard' | 'outlined' | 'filled',
    fieldProps?: IFieldProps
}

interface IDateFieldDefs {
    disableFuture?: boolean,
    disablePast?: boolean,
    disableHighlightToday?: boolean,
    displayWeekNumber?: boolean,
    disableOpenPicker?: boolean
}

interface ValueLabel {
    value: number,
    label: string
}

type FlexDirection = 'column' | 'row'

interface IMuiTextFieldDefinition extends ITextFieldDefinition, IMuiAttribs {

}

interface IMuiTextAreaDefinition extends ITextFieldDefinition, IMuiAttribs {

}

interface IMuiNumberFieldDefinition extends INumberFieldDefinition, IMuiAttribs {

}

interface IMuiIntegerFieldDefinition extends IIntegerFieldDefinition, IMuiAttribs {

}

interface IMuiSwitchDefinition extends ISwitchDefinition, IMuiAttribs {
    // checked?: boolean,
    // checkedIcon?: any
}

interface IMuiSelectFieldDefinition extends ISelectDefinition, IMuiAttribs {

}

interface IMuiRatingFieldDefinition extends IRatingFieldDefinition, IMuiAttribs {
    precision?: number,
    max?: number,
    icon?: any,
    emptyIcon?: any
    // highlightSelectedOnly?: boolean
}

interface IMuiDatePickerDefinition extends IDatePickerDefinition, IMuiAttribs, IDateFieldDefs {
    maxDate?: object,
    minDate?: object
}

interface IMuiDateTimePickerDefinition extends IDateTimePickerDefinition, IMuiAttribs, IDateFieldDefs {
    maxDate?: object,
    minDate?: object,
    maxDateTime?: object,
    minDateTime?: object,
    maxTime?: object,
    minTime?: object,
}

interface IMuiDateRangePickerDefinition extends IDatePickerDefinition, IMuiAttribs, IDateFieldDefs {
    maxDate?: object,
    minDate?: object
}

interface IMuiRangeSliderDefinition extends IRangeSliderDefinition, IMuiAttribs {
    disableSwap?: boolean,
    valueLabelDisplay?: 'auto' | 'on' | 'off',
    min?: number,
    max?: number,
    step?: number,
    marks?: boolean | ValueLabel[]
}

interface IMuiCheckBoxDefinition extends ICheckboxDefinition, IMuiAttribs {
    icon?: any,
    checkedIcon?: any
}

interface IMuiCheckBoxGroupDefinition extends ICheckboxGroupDefinition, IMuiAttribs {
    flexDirection?: FlexDirection
}

interface IMuiServerCheckBoxGroupDefinition extends IServerCheckboxDefinition, IMuiAttribs {
    flexDirection?: FlexDirection
}

interface IMuiRadioGroupDefinition extends IRadioGroupDefinition, IMuiAttribs {
    flexDirection?: FlexDirection
}

interface IMuiServerLookupDefinition extends IServerLookupDefinition, IMuiAttribs {
    renderOption?: Function,
    multiple?: boolean
}

interface IMuiPasswordDefinition extends IPasswordDefinition, IMuiAttribs {

}

interface IMuiAutoCompleteDefinition extends IAutoCompleteDefinition, IMuiAttribs {
    renderOption?: Function
}

export type {
    IMuiTextFieldDefinition, IMuiTextAreaDefinition, IMuiNumberFieldDefinition, IMuiIntegerFieldDefinition,
    IMuiSwitchDefinition, IMuiSelectFieldDefinition, IMuiRatingFieldDefinition, IMuiRangeSliderDefinition,
    IMuiDatePickerDefinition, IMuiDateTimePickerDefinition, IMuiDateRangePickerDefinition, IMuiServerLookupDefinition,
    IMuiCheckBoxDefinition, IMuiCheckBoxGroupDefinition, IMuiServerCheckBoxGroupDefinition, IMuiRadioGroupDefinition,
    IMuiPasswordDefinition, IMuiAutoCompleteDefinition
};