import { MutableRefObject } from 'react';
import { EventHandler, IFieldEventListener, IFieldValueListener } from './Types';
import { FieldDefinition } from './Definitions';
import { IEventListeners, IFormFieldManager } from './interface';

declare function useEventListeners<T>(fieldDef: FieldDefinition, formDataRef: MutableRefObject<any>, onDataChange: (key: string, d: any, v: {
    [x: string]: boolean;
}) => void, constraint: Function, eventHandler: EventHandler, eventListener?: IFieldEventListener, valueListener?: IFieldValueListener): IFormFieldManager;
declare function decorateListenersForInput(eventListeners: IEventListeners): any;
export { useEventListeners, decorateListenersForInput };
