import { ITextField } from '../../form/interfaceFields';
import { IMuiTextAreaDefinition } from './MuiTypes';

declare const MuiTextArea: import('react').ForwardRefExoticComponent<IMuiTextAreaDefinition & import('react').RefAttributes<ITextField>>;
export default MuiTextArea;
