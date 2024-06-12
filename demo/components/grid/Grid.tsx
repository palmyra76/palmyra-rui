import { Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from "@mui/material";
import CodeHighlighter from "../syntextHighlighter/CodeHighlighter";
import { TbCopy } from "react-icons/tb";
import { useRef, useState } from "react";

interface IGridInput {
    data: any,
    header: string,
    import: any
}

const Grid = (props: IGridInput) => {
    const contentRef = useRef(null);
    const [title, setTitle] = useState<string>("copy")

    const copyToClipboard = () => {
        const text = contentRef?.current?.textContent;
        navigator.clipboard.writeText(text)
            .then(() => {
                setTitle("copied")
                setTimeout(() => {
                    setTitle("copy")
                }, 1000)
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div>
            <div className="h1-container"><span className="h1">{props.header}</span></div>
            <div className="defn-import">
                <div ref={contentRef}>
                    <CodeHighlighter code={props.import} />
                </div>
                <div className="copy-icon-container">
                    <div className="copy-icon">
                        <Tooltip placement="left" title={title}>
                            <div>
                                <TbCopy className="tab-icon" onClick={copyToClipboard} />
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="defn-table-head">Property</TableCell>
                        <TableCell className="defn-table-head">Type</TableCell>
                        <TableCell className="defn-table-head">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((d, index) => (
                        <TableRow className="defn-table-column" key={index}>
                            <TableCell>{d.property}</TableCell>
                            <TableCell>{d.type}</TableCell>
                            <TableCell>{d.description}</TableCell>
                        </TableRow>))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default Grid;