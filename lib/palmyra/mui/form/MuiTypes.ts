import { ITextFieldDefinition } from "../../form/interface";

interface IFieldProps {
    size?: 'small' | 'medium' | 'large'
}

interface IMuiAttribs {
    variant?: 'standard' | 'outlined' | 'filled',
    fieldProps?: IFieldProps
}


interface IMuiTextFieldDefinition extends ITextFieldDefinition, IMuiAttribs {

}


export type { IMuiTextFieldDefinition };