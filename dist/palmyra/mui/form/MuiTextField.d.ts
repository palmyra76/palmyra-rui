import { ITextField } from '../../form/interfaceFields';
import { IMuiTextFieldDefinition } from './MuiTypes';

declare const MuiTextField: import('react').ForwardRefExoticComponent<IMuiTextFieldDefinition & import('react').RefAttributes<ITextField>>;
export default MuiTextField;
