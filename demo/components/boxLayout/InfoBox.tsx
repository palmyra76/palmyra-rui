import { Tooltip } from "@mui/material";
import CodeHighlighter from "../syntextHighlighter/CodeHighlighter";
import { TbCopy } from "react-icons/tb";
import { useRef, useState } from "react";

interface IBoxInput {
    Components?: React.FC[],
    setup: string
}
const InfoBox = (props: IBoxInput) => {
    const { Components, setup } = props;
    const contentRef = useRef(null);
    const [title, setTitle] = useState<string>("copy");

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
        <>
            <div className="info-box-container">
                {Components &&
                    <div className="info-box-component-container">
                        {Components.map((Component, index) => (
                            <Component key={index} />
                        ))}
                    </div>}
                <div className="info-box-detail-container" ref={contentRef}>
                    <div className="copy-icon-container">
                        <div className="copy-icon">
                            <Tooltip placement="left" title={title}>
                                <div>
                                    <TbCopy className="tab-icon" onClick={copyToClipboard} />
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    <CodeHighlighter code={setup} />
                </div>
            </div>
        </>

    )
}

export default InfoBox;
