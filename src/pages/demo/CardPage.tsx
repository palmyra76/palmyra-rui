import { PalmyraStoreFactory, ServerCardLayout, StoreFactory, getStyleConverter } from "../../../lib/main";
import { ScatterPlot } from "../../../lib/palmyra/chart/palmyra/ScatterPlot";
import SimpleChart from "../../components/chart/SimpleChart";
import { SelectDrag } from "../../../lib/palmyra/chart/chartjs/plugins/SelectDrag";
import { Chart, registerables } from "chart.js";


// import { Pagination } from '@mui/material';

Chart.register(...registerables, SelectDrag)

const card = (props: any) => {

    return <>
        <div style={{ border: "1px solid", padding: '10px' }}>Card</div>
    </>
}

const scatterStyleOptions = {
    'CRITICAL': {
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(0, 0, 0)',
    }, 'NORMAL': {
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(0, 0, 0)'
    }, 'VULNERABLE': {
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgb(0, 0, 0)'
    }, 'CRITICAL/ VULNERABLE': {
        backgroundColor: 'rgb(255, 205, 86, 0.2)',
        borderColor: 'rgb(0, 0, 0)'
    },
};

const boothStateStyleOptions = {
    'CRITICAL': {
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(0, 0, 0)',
    }, 'NORMAL': {
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgb(0, 0, 0)'
    }, 'VULNERABLE': {
        backgroundColor: 'rgba(153, 102, 255, 0.8)',
        borderColor: 'rgb(0, 0, 0)'
    }, 'CRITICAL/VULNERABLE': {
        backgroundColor: 'rgb(255, 205, 86, 0.8)',
        borderColor: 'rgb(0, 0, 0)'
    }, 'CRITICAL/ VULNERABLE': {
        backgroundColor: 'rgb(255, 205, 86, 0.8)',
        borderColor: 'rgb(0, 0, 0)'
    }
};

const transformOptions = {
    yKey: 'votersLok2019', xKey: 'votersTotal',
    xLabel: 'Total Voters', yLabel: 'Percent', group: 'criticality'
};

const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }, selectdrag: {
            enabled: true,
            onSelectComplete: (event) => {

                // Get selected range
                console.log(event.range);

                // Get selection coordinates
                console.log(event.boundingBox);
            }
        }
    },
};

const CardPage = () => {
    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' });
    const store = storeFactory.getGridStore({}, '/params/definition');

    const procesor = getStyleConverter('default', scatterStyleOptions, transformOptions);


    const multiBarChart = <SimpleChart<'GroupedBar'> type="GroupedBar"
        chartOptions={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        boxHeight: '5'
                    }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    offset: -4
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }}
        storeOptions={{ endPoint: '/booth/chart/byCriticality/byConstituency/1' }}
        styleOptions={boothStateStyleOptions}
        transformOptions={{
            xKey: 'constituency',
            group: 'criticality',
            yKey: 'boothCount',
            yLabel: 'Criticality'
        }}
        // filter={geoFilter}
        hideTitle={true}
    />;


    const scatterplot = <SimpleChart type="Scatter"
        chartOptions={defaultOptions}
        storeOptions={{ endPoint: '/dashboard/raw/booth' }}
        transformOptions={transformOptions}
    />

    const criticalChart = <SimpleChart<'Bar'> type="Bar"
        chartOptions={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }}

        storeOptions={{ endPoint: '/booth/chart/byCriticality' }}
        styleOptions={boothStateStyleOptions}
        transformOptions={{
            xKey: 'name',
            yKey: 'count',
            yLabel: 'Criticality'
        }}
        hideTitle={true}
    />

    return <><div className="param-list-servercard-layout">
        {/* <ServerCardLayout Child={card} store={store} EmptyChild={card} children='sss'
            pageSize={[16]}></ServerCardLayout> */}

        {/* <ScatterPlot storeOptions={{ endPoint: '/dashboard/raw/booth' }} 
            filter={{constituencyId:1}}
            transformOptions={transformOptions} postProcessors={[procesor]}
        /> */}

        {/* {multiBarChart} */}

        {criticalChart}




    </div>

    </>
}

export default CardPage;