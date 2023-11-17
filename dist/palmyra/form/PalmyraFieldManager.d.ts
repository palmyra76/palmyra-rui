import { EventHandler, IFieldEventListener, IFieldValueListener } from "./Types";
import { FieldDefinition } from "./Definitions";
import { IEventListeners, IFormFieldManager } from "./interface";
declare function getEventListeners<T>(fieldDef: FieldDefinition, value: any, onDataChange: (key: string, d: any, v: {
    [x: string]: boolean;
}) => void, constraint: Function, eventHandler: EventHandler, eventListener?: IFieldEventListener, valueListener?: IFieldValueListener): IFormFieldManager;
declare function decorateListenersForInput(eventListeners: IEventListeners): any;
export { getEventListeners, decorateListenersForInput };
