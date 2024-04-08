import { IEventListeners, IFormFieldManager } from './interface';
import { FieldDefinition } from './Definitions';
import { EventHandler, IFieldEventListener, IFieldValueListener } from './Types';
import { MutableRefObject } from 'react';

declare function useEventListeners<T>(fieldDef: FieldDefinition, formDataRef: MutableRefObject<any>, onDataChange: (key: string, d: any, v: {
    [x: string]: boolean;
}) => void, constraint: Function, eventHandler: EventHandler, eventListener?: IFieldEventListener, valueListener?: IFieldValueListener): IFormFieldManager;
declare function decorateListenersForInput(eventListeners: IEventListeners): any;
export { useEventListeners, decorateListenersForInput };
