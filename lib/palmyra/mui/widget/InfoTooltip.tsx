import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
import { BsInfoCircle } from "react-icons/bs";
import { ITitle } from "../../form";

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
    return <BsInfoCircle className='header-info-icon' />;
};



const renderTitle = (titleInfo: ITitle) => {

    if (titleInfo) {
        if (typeof titleInfo === 'function') {
            return titleInfo();
        }

        if (typeof titleInfo === 'object' && titleInfo.toolTip) {
            //@ts-ignore
            const p: IDecoratedTitle = titleInfo;
            return <div className='info-header'>
                <span className='header-content-text'>{p.title}</span>
                <InfoTooltip placement='right' title={p.toolTip} arrow>
                    <span>
                        <InfoCircle />
                    </span>
                </InfoTooltip>
            </div >

        }
        //@ts-ignore
        const title: string = typeof titleInfo == 'string' ? titleInfo : titleInfo.title;
        return <span className='header-content-text'>{title}</span>
    }
    else
        return <></>;
}

export { InfoCircle, InfoTooltip };

export { renderTitle }