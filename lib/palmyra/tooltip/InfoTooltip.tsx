import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

const InfoTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 250,
        fontSize: theme.typography.pxToRem(14),
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

export { InfoTooltip };
