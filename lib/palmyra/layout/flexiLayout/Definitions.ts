import { FieldDefinition } from "../../form/Definitions";
import { ColumnDefinition } from "../../grid";

type SectionType = 'view' | 'form' | 'grid' | 'chart';

type flexiPrimaryType = 'formEdit' | 'formView' | 'dashboard' | 'grid' | 'card';

interface Positionable {
    height?: number,
    width?: number
}

interface Titleable {
    name?: string,
    title?: string,
    hideTitle?: boolean
}

interface Renderable {
    Container?: React.FC, // Current container
    Renderer?: React.FC // Child Renderer
}

interface FormLayout extends Renderable {
    fields: FieldDefinition[],
    options?: {
        columns: number
    }
}

interface TableLayout extends Renderable, Positionable {
    reference?: string,
    pagination?: number[],
    fields: ColumnDefinition[]
}

interface ChartLayout extends Renderable {

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

interface FlexiLayoutDefinition extends Titleable, Renderable {
    tabs: TabDefinition[],
    type: flexiPrimaryType
}

export type { TabDefinition, SectionDefinition, FlexiLayoutDefinition };

export type { FormLayout, TableLayout, ChartLayout };

export type { Positionable, Titleable };

export type { SectionType };
