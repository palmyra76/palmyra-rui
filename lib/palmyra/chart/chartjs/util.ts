import { ITransformOptions } from "../Types";


function getKeys(options: ITransformOptions) {
    console.log(options);
    const xKey: any = options?.xKey || 'name';
    const yKe = options?.yKey || 'value';

    const yKeys = yKe instanceof Array ? yKe : [yKe];

    return {
        xKey: xKey,
        yKeys: yKeys
    }
}

function getLabels(options: ITransformOptions) {
    const xLabel: any = options?.xLabel || options?.xKey || 'name';
    const yLabs = options?.yLabel || options?.yKey || 'value';

    const yLabels = (yLabs instanceof Array || typeof yLabs == 'object') ? yLabs : [yLabs];

    return {
        xLabel,
        yLabels
    }
}

const getLabel = (yLabels: any, key: string, index: number) => {
    if (yLabels instanceof Array)
        return yLabels[index] || key;
    else
        return yLabels[key] || key;
}

export {getLabel, getLabels, getKeys}