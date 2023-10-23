type ChartDataSet = {
    label: string,
    data: number[],
    borderColor?: any,
    backgroundColor?: any
}


type LineDataInput = {
    labels: string[],
    datasets: ChartDataSet[]
}

export type { LineDataInput, ChartDataSet };