import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
import ReactDOM from 'react-dom';
import { MutableRefObject } from 'react';

const fileType = {
    PNG: 'image/png',
    JPEG: 'image/jpeg',
    PDF: 'application/pdf'
};

const DEFAULT_PNG = {
    fileName: 'component.png',
    type: fileType.PNG,
    html2CanvasOptions: {}
};

const DEFAULT_JPEG = {
    fileName: 'component.jpg',
    type: fileType.JPEG,
    html2CanvasOptions: {}
};

const DEFAULT_PDF = {
    fileName: 'component.pdf',
    type: fileType.PDF,
    html2CanvasOptions: {},
    pdfOptions: {}
};

/**
 * @param  {string} uri
 * @param  {string} filename
 */
const saveAs = (uri: any, filename: any) => {
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
};

/**
 * @param  {React.RefObject} node
 * @param  {string} fileName
 * @param  {string} type
 * @param  {object} html2CanvasOptions={}
 */

interface PdfOptions {
    w: number;
    h: number;
    orientation?: "p" | "portrait" | "l" | "landscape";
    unit?: "pt" | "px" | "in" | "mm" | "cm" | "ex" | "em" | "pc";
    pdfFormat: any;
}

const getPDF = (canvas: any, props: PdfOptions) => {
    const { w, h, orientation, unit = 'mm', pdfFormat } = props;
    const width = w || canvas.width
    const height = h || canvas.height
    const o = orientation || width > height ? 'l' : 'p'
    const format = pdfFormat || 'a4'

    return new JsPDF(o, unit, format)
}

interface ExportComponentInput {
    fileName?: string;
    type?: any;
    html2CanvasOptions?: any;
    pdfOptions?: any;
}

const exportComponent = (node: any, props: ExportComponentInput) => {
    const { fileName, type, html2CanvasOptions, pdfOptions } = props;
    if (!node.current) {
        throw new Error("'node' must be a RefObject")
    }

    //@ts-ignore
    const element: HTMLElement = ReactDOM.findDOMNode(node.current);
    return html2canvas(element, {
        scrollY: -window.scrollY,
        useCORS: true,
        ...html2CanvasOptions
    }).then(canvas => {
        console.log(canvas.width)
        if (type === fileType.PDF) {
            const pdf = getPDF(canvas, pdfOptions)
            pdf.addImage(
                canvas.toDataURL(fileType.PNG, 1.0),
                'PNG',
                pdfOptions.x || 0,
                pdfOptions.y || 0,
                pdfOptions.w || canvas.width,
                pdfOptions.h || canvas.height
            );
            pdf.save(fileName);
        } else {
            saveAs(canvas.toDataURL(type, 1.0), fileName);
        }
    });
};

/**
 * @param  {React.RefObject} node
 * @param  {string} fileName='component.png'
 * @param  {object} html2CanvasOptions={}
 */
const exportComponentAsPNG = (node: MutableRefObject<HTMLElement>, parameters = {}) => exportComponent(node, { ...DEFAULT_PNG, ...parameters });

/**
 * @param  {React.MutableRefObject} node
 * @param  {string} fileName='component.jpeg'
 * @param  {string} type=fileType.JPEG
 * @param  {object} html2CanvasOptions={}
 */
const exportComponentAsJPEG = (node: MutableRefObject<HTMLElement>, parameters = {}) => exportComponent(node, { ...DEFAULT_JPEG, ...parameters });

/**
 * @param  {React.RefObject} node
 * @param  {string} fileName='component.pdf'
 * @param  {string} type=fileType.PDF
 * @param  {object} html2CanvasOptions={}
 * @param  {string} pdfOptions={}
 */
const exportComponentAsPDF = (node: MutableRefObject<HTMLElement>, parameters = {}) => exportComponent(node, { ...DEFAULT_PDF, ...parameters });

export {
    exportComponentAsJPEG,
    exportComponentAsPDF,
    exportComponentAsPNG
};