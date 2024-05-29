import { TabPanel } from "./TabPanel"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Tooltip } from '@mui/material';
import { useRef, useState } from "react";
import { TbCopy } from "react-icons/tb";
import { toast } from "react-toastify";

interface TabInput {
    labels: string[],
    Children: React.FC[],
    Form: React.FC,
    title?: string
}
const TabFormX = (props: TabInput) => {
    const [value, setValue] = useState<any>(0);

    const { labels, Children, Form, title } = props;
    const contentRef = useRef(null);

    const copyToClipboard = () => {
        const text = contentRef?.current?.textContent;
        navigator.clipboard.writeText(text)
            .then(() => {
                toast("The source code has been copied to your clipboard", {
                    position: "bottom-left",
                    autoClose: 1500,
                    theme: 'dark',
                    hideProgressBar: true,
                    pauseOnHover: false,
                    closeButton: false,
                });
                console.log(contentRef?.current,'curr');
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="h1-container">
                <span className="h1">
                    {title}
                </span>
            </div>
            <div className="form-container">
                <Form />
            </div>
            <div className="tab-form-container">
                <div className="tab-container">
                    <Box sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="user-tabs">
                            {labels.map((label, index) => (
                                <Tab label={label} className="user-tab" disableRipple />
                            ))}

                        </Tabs>
                        <Tooltip placement="left" title="( copy )">
                            <div>
                                <TbCopy className="tab-icon" onClick={copyToClipboard} />
                            </div>
                        </Tooltip>
                    </Box>

                    <Box sx={{ width: '100%' }} className="user-form-container">
                        {Children.map((Child: any, index: any) => (
                            <TabPanel value={value} index={index} contentRef={contentRef}>
                                <Child />
                            </TabPanel>
                        ))}
                    </Box>


                </div>
            </div>
        </>
    )
}

export default TabFormX;
