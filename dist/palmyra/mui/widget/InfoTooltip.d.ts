import { TooltipProps } from '@mui/material';
import { ITitle } from '../../form';

declare const InfoTooltip: import('@emotion/styled').StyledComponent<TooltipProps & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>, {}, {}>;
declare const InfoCircle: () => import("react").JSX.Element;
declare const renderTitle: (titleInfo: ITitle) => string | number | bigint | boolean | Iterable<import('react').ReactNode> | Promise<string | number | bigint | boolean | import('react').ReactPortal | import('react').ReactElement<unknown, string | import('react').JSXElementConstructor<any>> | Iterable<import('react').ReactNode>> | import("react").JSX.Element;
export { InfoCircle, InfoTooltip };
export { renderTitle };
