import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
import { BsInfoCircle } from "react-icons/bs";

const InfoTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 500,
        fontSize: theme.typography.pxToRem(16),
        border: '1px solid #dadde9',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: '#f5f5f9',
        "&::before": {
            backgroundColor: '#f5f5f9',
            border: '1px solid #dadde9',
        },
    },
}));

const InfoCircle = function () {
    return <BsInfoCircle class='grid-header-info-icon' />;
};

export { InfoTooltip };

export { InfoCircle }