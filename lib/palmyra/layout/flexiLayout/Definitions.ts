import { FieldDefinition } from "../../form/Definitions";
import { ColumnDefinition } from "../../grid";
import { Positionable, Renderable, Titleable, storeBacked } from "../Types";

type SectionType = 'view' | 'form' | 'grid' | 'chart';

type flexiPrimaryType = 'formEdit' | 'formView' | 'dashboard' | 'grid' | 'card';

interface FormLayout extends Renderable {
    fields: FieldDefinition[],
    options?: {
        columns: number
    }
}

interface TableLayout extends Renderable, Positionable, storeBacked {
    pagination?: number[],
    fields: ColumnDefinition[]
}

interface ChartLayout extends Renderable, storeBacked {

}

interface SectionDefinition extends Positionable, Titleable, Renderable {
    type: SectionType,
    collapsed?: boolean,
    collapsable?: boolean,
    formLayout?: FormLayout,
    tableLayout?: TableLayout,
    chartLayout?: ChartLayout
}

interface TabDefinition extends Titleable, Renderable {
    sections: SectionDefinition[],
    closeable?: boolean
}

interface FlexiLayoutDefinition extends Titleable, Renderable, storeBacked {
    tabs: TabDefinition[],
    type: flexiPrimaryType
}

export type { TabDefinition, SectionDefinition, FlexiLayoutDefinition, flexiPrimaryType };

export type { FormLayout, TableLayout, ChartLayout };

export type { SectionType };
