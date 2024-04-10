import { ITitle } from '../../form';
import { TooltipProps } from '@mui/material';

declare const InfoTooltip: import('@emotion/styled').StyledComponent<TooltipProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
declare const InfoCircle: () => import("react/jsx-runtime").JSX.Element;
declare const renderTitle: (titleInfo: ITitle) => string | number | boolean | Iterable<import('react').ReactNode> | import("react/jsx-runtime").JSX.Element;
export { InfoCircle, InfoTooltip };
export { renderTitle };
