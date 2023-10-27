import { EventHandler } from "./Types";
import { FieldDefinition } from "./Definitions";
import { IEventListeners, IFormFieldManager } from "./interface";
declare function getEventListeners<T>(fieldDef: FieldDefinition, value: any, onDataChange: Function, constraint: Function, eventHandler: EventHandler): IFormFieldManager;
declare function decorateListenersForInput(eventListeners: IEventListeners): any;
export { getEventListeners, decorateListenersForInput };
