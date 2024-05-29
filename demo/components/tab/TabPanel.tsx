import { Box } from '@mui/material';

function TabPanel(props: { children?: React.ReactNode; index: number; value: number, contentRef: any }) {
    const { children, value, index, contentRef, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            ref={contentRef}
            {...other}
        >
            {value === index && (
                <Box >
                    {children}
                </Box>
            )}
        </div>
    );
}

export { TabPanel };
