import { Converter } from '.';
import { AttributeDefinition } from '../../form/Definitions';
import { IMuiRangeSliderDefinition } from '../../mui/form/MuiTypes';

type ISliderRange = [number, number];
declare class SliderRangeConverter implements Converter<any, ISliderRange> {
    min: number;
    max: number;
    constructor(props: IMuiRangeSliderDefinition);
    getFieldData: (data: any, props: AttributeDefinition) => import('../../form/Definitions').InputType;
    getRawdata: (data: any, props: AttributeDefinition) => import('../../form/Definitions').InputType;
    format(data: ISliderRange): any;
    parse(text: any): ISliderRange;
    _parseNumber(t: string): number;
    convert(t: string): string;
    getDefaultValue: (d: any) => any;
}
export { SliderRangeConverter };
