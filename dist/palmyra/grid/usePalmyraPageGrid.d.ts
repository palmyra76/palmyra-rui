import { TableLayout } from '../layout/flexiLayout';
import { ColumnDefinition } from '.';
import { IEndPoint } from '../layout/Types';

interface IPalmyraGridInput {
    pageName: string;
    fields: ColumnDefinition[];
    endPoint: IEndPoint;
    idKey: string;
}
declare const usePalmyraPageGrid: (props: IPalmyraGridInput) => {
    layout: TableLayout;
};
export { usePalmyraPageGrid };
