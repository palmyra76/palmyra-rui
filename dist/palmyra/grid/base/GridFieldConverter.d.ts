import { FieldDefinition } from '../../form/Definitions';
import { ColumnDefinition } from '..';

declare const convertToField: (columns: ColumnDefinition[]) => FieldDefinition[];
export { convertToField };
