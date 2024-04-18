import { DefaultQueryParams } from 'palmyra-wire';
import { ITitle } from '../form/interface';
import { ActionOptions } from '../layout/Types';
import { ColumnDefinition, GridCustomizer, IEndPoint, IExportOptions, IPageQueryable, PageContext, StoreFactory } from '../../main';

interface IPalmyraGridInput {
    columns: ColumnDefinition[];
    actions?: ActionOptions;
    topic?: string;
    onDataChange?: (newData: any[], oldData?: any[]) => void;
    quickSearch?: string;
    customizer?: GridCustomizer;
    endPoint: IEndPoint;
    storeFactory: StoreFactory<any>;
    layoutParams: PageContext;
    defaultParams?: DefaultQueryParams;
    pagination?: number[];
    customButton?: React.ReactNode[];
    title?: ITitle;
    customAddButton?: any;
    exportOptions?: IExportOptions;
    densityOption?: any;
    fetchAll?: boolean;
    filterTopic?: string;
    initialFetch?: boolean;
}
interface IPalmyraGrid extends IPageQueryable {
}
declare const PalmyraGrid: import('react').ForwardRefExoticComponent<IPalmyraGridInput & import("react").RefAttributes<IPalmyraGrid>>;
export { PalmyraGrid };
export type { IPalmyraGrid };
