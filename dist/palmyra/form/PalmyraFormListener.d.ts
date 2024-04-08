import { IFieldEventListener } from '.';

declare const getDataListener: (fieldList: string[], getFieldRef?: <T>(field: string) => T) => {
    eventListener: IFieldEventListener;
    data: any;
    status: boolean;
    focusEmptyField: () => void;
};
export { getDataListener };
