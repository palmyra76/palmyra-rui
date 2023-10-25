/// <reference types="react" />
import { FieldProperties } from './Types';
/**
 * Supported Event Handlers
 *  1. asyncValid
 *  2. onComplete - for TextField - after 300ms, for select - onSelect.
 *  3. onClear - reset of all the value (empty value)
 */
declare const ValidationTextField: import("react").ForwardRefExoticComponent<FieldProperties & import("react").RefAttributes<unknown>>;
export default ValidationTextField;
