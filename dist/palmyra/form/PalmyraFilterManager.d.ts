import { IFieldEventListener, IFieldValueListener, IFormHelper } from './Types';
import { IGetFieldManager } from './interface';

declare function createFilterFormHelper(): IFormHelper;
interface IListeners {
    eventListeners: Record<string, IFieldEventListener>;
    valueListeners: Record<string, IFieldValueListener>;
}
declare function createFilterData(data: any, formHelper?: IFormHelper, listeners?: IListeners): {
    getFieldManager: IGetFieldManager;
    getFilterData: (idProperty?: string) => {
        [x: string]: any;
    };
};
export { createFilterData, createFilterFormHelper };
