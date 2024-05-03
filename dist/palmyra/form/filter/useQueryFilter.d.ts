import { MutableRefObject } from 'react';

interface IQueryFilterInput {
    gridRef?: MutableRefObject<any>;
}
interface IQueryFilterOutput {
    lookupFilter?: any;
    textFilter?: any;
    optionFilter?: any;
}
declare const useQueryFilter: (props: IQueryFilterInput) => IQueryFilterOutput;
export { useQueryFilter };
