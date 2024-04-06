import * as d3 from 'd3';
import { ScatterDataInput } from '../chartjs/Types';
import { useEffect, useRef } from 'react';

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };


type ScatterplotProps = {
    width: number;
    height: number;
    data: ScatterDataInput
};

// const margin = { top: 20, right: 15, bottom: 60, left: 70 };


const ScatterPlot = ({ width, height, data }: ScatterplotProps) => {
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    const canvasRef = useRef();
    const svgRef = useRef();
    const scaleRef = useRef({ xScale: null, yScale: null })
    const axisRef = useRef({ xAxis: null, yAxis: null });

    function drawPoint(context: CanvasRenderingContext2D) {

        if (!data || !data.datasets)
            return;

        const { xScale, yScale } = scaleRef.current;

        data.datasets.map((dataset) => {
            const backgroundColor = dataset.backgroundColor || 'red';
            dataset.data.map((d) => {
                context.beginPath();
                context.fillStyle = backgroundColor;
                const px = xScale(d.x);
                const py = yScale(d.y);
                context.arc(px, py, 6, 0, 2 * Math.PI, true);
                context.fill();
            })
        })
    }

    useEffect(() => {
        var svgChart = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)

        const xScale = d3.scaleLinear().domain([0, 10]).range([0, boundsWidth]).nice();
        const yScale = d3.scaleLinear().domain([0, 10]).range([boundsHeight, 0]).nice();
        scaleRef.current = { xScale, yScale };

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        const axisLayout = svgChart.append('g')
            .attr('transform', `translate(${MARGIN.left}, ${MARGIN.top})`);

        // Add Axis
        const gxAxis = axisLayout.append('g')
            .attr('transform', `translate(0, ${boundsHeight})`)
            .call(xAxis);

        const gyAxis = axisLayout.append('g')
            .call(yAxis);

        axisRef.current = { xAxis: gxAxis, yAxis: gyAxis };

        // Add labels
        axisLayout.append('text')
            .attr('x', `-${boundsHeight / 2}`)            
            // .attr('dy', '-3.5em')
            .attr('transform', 'rotate(-90)')
            .attr('y', '-20')
            .text('Axis Y');
        axisLayout.append('text')
            .attr('x', `${boundsWidth / 2}`)
            .attr('y', `${boundsHeight + MARGIN.bottom}`)
            .text('Axis X');

    }, [])

    useEffect(() => {
        var canvas = d3.select(canvasRef.current)
            .attr("id", "canvas")
            .attr("width", boundsWidth)
            .attr("height", boundsHeight)
            .attr('transform', `translate(${[MARGIN.left, MARGIN.top].join(',')})`);

        var context = canvas.node().getContext("2d");

        drawPoint(context);

    }, [data])

    return (
        <div style={{ height: height, width: width }}>
            <svg ref={svgRef} style={{ position: 'absolute', zIndex: 10 }} />
            <canvas ref={canvasRef} style={{ position: 'absolute', zIndex: 7 }} />
            chart
        </div>
    );
};


export { ScatterPlot as D3ScatterPlot }