import { MutableRefObject } from 'react';

/**
 * @param  {React.RefObject} node
 * @param  {string} fileName='component.png'
 * @param  {object} html2CanvasOptions={}
 */
declare const exportComponentAsPNG: (node: MutableRefObject<HTMLElement>, parameters?: {}) => Promise<void>;
/**
 * @param  {React.MutableRefObject} node
 * @param  {string} fileName='component.jpeg'
 * @param  {string} type=fileType.JPEG
 * @param  {object} html2CanvasOptions={}
 */
declare const exportComponentAsJPEG: (node: MutableRefObject<HTMLElement>, parameters?: {}) => Promise<void>;
/**
 * @param  {React.RefObject} node
 * @param  {string} fileName='component.pdf'
 * @param  {string} type=fileType.PDF
 * @param  {object} html2CanvasOptions={}
 * @param  {string} pdfOptions={}
 */
declare const exportComponentAsPDF: (node: MutableRefObject<HTMLElement>, parameters?: {}) => Promise<void>;
export { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG };
