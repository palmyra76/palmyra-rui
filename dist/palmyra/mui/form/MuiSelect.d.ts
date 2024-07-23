import { ISelectField } from '../../form/interfaceFields';
import { IMuiSelectFieldDefinition } from './MuiTypes';

declare const MuiSelect: import('react').ForwardRefExoticComponent<IMuiSelectFieldDefinition & import('react').RefAttributes<ISelectField>>;
export default MuiSelect;
