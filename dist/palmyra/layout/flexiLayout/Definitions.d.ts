import { Actionable, Positionable, Renderable, Titleable, storeBacked } from '../Types';
import { ColumnDefinition } from '../../grid';
import { strings } from '../../form/interface';
import { FieldDefinition } from '../../form/Definitions';
import { ChartType, StyleOptions, transformable } from '../../chart/Types';

type SectionType = 'view' | 'form' | 'grid' | 'chart';
type flexiPrimaryType = 'formNew' | 'formEdit' | 'formView' | 'dashboard' | 'grid' | 'card';
interface FormLayout extends Renderable {
    fields: FieldDefinition[];
    options?: {
        columns: number;
    };
}
interface TableLayout extends Renderable, Positionable, storeBacked, Actionable {
    pagination?: number[];
    quickSearch: string;
    fields: ColumnDefinition[];
}
interface ChartLayout extends Titleable, Positionable, Renderable, storeBacked, transformable {
    chartOptions?: any;
    type: ChartType;
    styleOptions?: StyleOptions;
}
interface SectionDefinition extends Positionable, Titleable, Renderable {
    type: SectionType;
    columns?: number;
    collapsed?: boolean;
    collapsable?: boolean;
    formLayout?: FormLayout;
    tableLayout?: TableLayout;
    chartLayout?: ChartLayout;
}
interface TabDefinition extends Titleable, Renderable {
    sections: SectionDefinition[];
    closeable?: boolean;
}
interface FlexiLayoutDefinition extends Titleable, Renderable, storeBacked {
    idProperty?: strings;
    tabs: TabDefinition[];
    title?: string;
    type: flexiPrimaryType;
}
export type { TabDefinition, SectionDefinition, FlexiLayoutDefinition, flexiPrimaryType };
export type { FormLayout, TableLayout, ChartLayout };
export type { SectionType };
