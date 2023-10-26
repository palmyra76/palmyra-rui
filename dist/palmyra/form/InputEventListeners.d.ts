import { FieldProperties } from "./Types";
import { FieldValidStatus } from "./Definitions";
interface EventListeners {
    onBlur: Function;
    onFocus: Function;
    onValueChange: Function;
}
interface DataStatusListener {
    data: any;
    setData: Function;
    error: FieldValidStatus;
    eventListeners: EventListeners;
}
declare function getEventListeners<T>(props: FieldProperties): DataStatusListener;
declare function decorateListenersForInput(eventListeners: EventListeners): any;
export { getEventListeners, decorateListenersForInput };
