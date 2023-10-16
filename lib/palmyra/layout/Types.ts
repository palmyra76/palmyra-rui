import { FieldDefinition } from "../form/Types";

type SectionType = 'view' | 'form' | 'table' | 'chart';

interface Positionable {
    height?: number,
    width?: number
}

interface Titleable {
    name?: string,
    title?: string,
    hideTitle: boolean
}

interface Renderable{    
    Container?: React.FC, // Current container
    Renderer?: React.FC // Child Renderer
}

interface FormLayout extends Renderable {
    fields: FieldDefinition[],
    options?: {
        columns: number
    }
}

interface TableLayout extends Renderable {
    fields: FieldDefinition[]
}

interface ChartLayout extends Renderable {

}

interface SectionDefinition extends Positionable, Titleable, Renderable {
    type: SectionType,
    children: any,
    collapsed?: boolean,
    collapsable?: boolean,
    formLayout?: FormLayout,
    tableLayout?: TableLayout,
    chartLayout?: ChartLayout
}

interface TabDefinition extends Titleable, Renderable {
    sections: SectionType[],
    closeable: boolean
}

export type { TabDefinition, SectionDefinition };

export type { FormLayout, TableLayout, ChartLayout };

export type { Positionable, Titleable };

export type { SectionType };
