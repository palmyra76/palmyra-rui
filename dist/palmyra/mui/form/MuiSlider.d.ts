import { ISliderField } from '../../form/interfaceFields';
import { IMuiRangeSliderDefinition } from './MuiTypes';

declare const MuiSlider: import('react').ForwardRefExoticComponent<IMuiRangeSliderDefinition & import('react').RefAttributes<ISliderField>>;
export default MuiSlider;
