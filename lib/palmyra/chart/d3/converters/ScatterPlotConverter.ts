
import { D3DataConverter } from "../Types";


const ScatterPlotConverter = (sourceType: string, transformOptions): D3DataConverter<any> => {

    return (data: [], options?: any) => {

        const o = transformOptions;

        if (null == data)
            return data;

        const result = [];

        data.map((d) => {
            result.push({
                x: d[o.xKey],
                y: d[o.yKey]
            })
        })

        console.log(result);

        return result;
    }

}


export { ScatterPlotConverter }